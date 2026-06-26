import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const APIFY_TOKEN = process.env.APIFY_TOKEN;
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/nasreen_collection1/';

// Extract username
const username = INSTAGRAM_URL.replace(/\/$/, '').split('/').pop() || 'nasreen_collection1';

console.log(`Starting scrape for Instagram profile: ${username}...`);

interface ScrapedData {
  profile: any;
  posts: any[];
}

async function runScrape() {
  if (!APIFY_TOKEN) {
    console.error('Error: APIFY_TOKEN is not defined in .env.local');
    return;
  }

  const dataDir = path.join(process.cwd(), 'src/data');
  const photosDir = path.join(process.cwd(), 'public/photos');
  const videosDir = path.join(process.cwd(), 'public/videos');

  // Ensure directories exist
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(photosDir)) fs.mkdirSync(photosDir, { recursive: true });
  if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });

  let profileData: any = null;
  let postsData: any[] = [];

  // 1. Scraping profile info
  try {
    console.log('Fetching Instagram profile data from Apify...');
    const profileResponse = await fetch(
      'https://api.apify.com/v2/acts/apify~instagram-profile-scraper/run-sync-get-dataset-items',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${APIFY_TOKEN}`
        },
        body: JSON.stringify({
          usernames: [username]
        })
      }
    );

    if (profileResponse.ok) {
      const items = await profileResponse.json() as any[];
      if (items && items.length > 0) {
        profileData = items[0];
        console.log('Successfully fetched profile data!', profileData.username);
      } else {
        console.warn('Profile scraper returned empty dataset.');
      }
    } else {
      console.error(`Profile scraper API error: ${profileResponse.status} ${profileResponse.statusText}`);
      const text = await profileResponse.text();
      console.error(text);
    }
  } catch (err) {
    console.error('Error fetching profile data:', err);
  }

  // 2. Scraping posts and reels
  try {
    console.log('Fetching Instagram posts & reels data from Apify...');
    const postsResponse = await fetch(
      'https://api.apify.com/v2/acts/apify~instagram-scraper/run-sync-get-dataset-items',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${APIFY_TOKEN}`
        },
        body: JSON.stringify({
          directUrls: [INSTAGRAM_URL],
          resultsType: 'posts',
          resultsLimit: 30
        })
      }
    );

    if (postsResponse.ok) {
      const items = await postsResponse.json() as any[];
      if (items && items.length > 0) {
        postsData = items;
        console.log(`Successfully fetched ${postsData.length} posts/reels!`);
      } else {
        console.warn('Posts scraper returned empty dataset.');
      }
    } else {
      console.error(`Posts scraper API error: ${postsResponse.status} ${postsResponse.statusText}`);
      const text = await postsResponse.text();
      console.error(text);
    }
  } catch (err) {
    console.error('Error fetching posts data:', err);
  }

  // Save raw data to src/data/instagram.json
  const result: ScrapedData = {
    profile: profileData || {
      username: username,
      fullName: 'Nasreen Collection',
      biography: '🛍️ Korean school bags, newborn baby clothes, plush toys & cute gifts 🎀 Delivers across India 🇮🇳 Walk-in welcome!',
      followersCount: 1200,
      profilePicUrl: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?w=400&auto=format&fit=crop&q=80',
      externalUrl: 'https://wa.me/918976731508'
    },
    posts: postsData.length > 0 ? postsData : getFallbackPosts()
  };

  fs.writeFileSync(
    path.join(dataDir, 'instagram.json'),
    JSON.stringify(result, null, 2),
    'utf-8'
  );
  console.log('Saved instagram.json successfully!');

  // 3. Download media
  console.log('Downloading media files...');
  for (let i = 0; i < result.posts.length; i++) {
    const post = result.posts[i];
    const postId = post.id || post.shortCode || `post_${i}`;
    
    // Check photo
    const displayUrl = post.displayUrl || post.thumbnailUrl || post.imageUrl;
    if (displayUrl) {
      const photoName = `${postId}.jpg`;
      const photoPath = path.join(photosDir, photoName);
      if (!fs.existsSync(photoPath)) {
        try {
          console.log(`Downloading photo ${photoName}...`);
          const res = await fetch(displayUrl, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
              'Referer': 'https://www.instagram.com/'
            }
          });
          if (res.ok) {
            const buffer = await res.arrayBuffer();
            fs.writeFileSync(photoPath, Buffer.from(buffer));
            console.log(`OK: ${photoName}`);
          } else {
            console.log(`FAIL: ${photoName} (${res.status})`);
          }
        } catch (err: any) {
          console.log(`FAIL: ${photoName} (${err.message})`);
        }
      }
    }

    // Check video (for reels)
    const videoUrl = post.videoUrl;
    if (videoUrl) {
      const videoName = `${postId}.mp4`;
      const videoPath = path.join(videosDir, videoName);
      if (!fs.existsSync(videoPath)) {
        try {
          console.log(`Downloading video ${videoName}...`);
          const res = await fetch(videoUrl, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
              'Referer': 'https://www.instagram.com/'
            }
          });
          if (res.ok) {
            const buffer = await res.arrayBuffer();
            fs.writeFileSync(videoPath, Buffer.from(buffer));
            console.log(`OK: ${videoName}`);
          } else {
            console.log(`FAIL: ${videoName} (${res.status})`);
          }
        } catch (err: any) {
          console.log(`FAIL: ${videoName} (${err.message})`);
        }
      }
    }
  }

  console.log('Media download step finished!');
}

function getFallbackPosts() {
  // Return some high quality fallback posts aligned with Nasreen Collection niche
  return [
    {
      id: "post_1",
      shortCode: "Cs3b8p6uJg1",
      displayUrl: "https://images.unsplash.com/photo-1515488042361-404e9250afef?w=600&auto=format&fit=crop&q=80",
      caption: "Newborn baby gift set in pastel shades 🍼 Super soft and skin-friendly fabric. Order via WhatsApp +918976731508. #nasreencollection #babywear",
      likesCount: 142,
      commentsCount: 12
    },
    {
      id: "post_2",
      shortCode: "Cs5e8qDuY_2",
      displayUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80",
      caption: "Cute Korean School Bags back in stock! 🎒 Featuring soft colors and extra pockets. Drop us a message on WhatsApp. #koreanbags #kawaiischool",
      likesCount: 231,
      commentsCount: 28
    },
    {
      id: "post_3",
      shortCode: "Cs8h9sEuH_3",
      displayUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
      caption: "Diamond Tumblers 💎 Sparkling and perfect for kids water or milk bottles. Keep drinks fresh! #diamondtumbler #kidsbottles",
      likesCount: 95,
      commentsCount: 8
    },
    {
      id: "post_4",
      shortCode: "CtBf9rLuI_4",
      displayUrl: "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=600&auto=format&fit=crop&q=80",
      caption: "Adorable plush toys: Ragdoll cat 🐱 and cozy penguin 🐧 plushies. Huggable and premium quality! #plushtoys #nasreencollection",
      likesCount: 184,
      commentsCount: 19
    },
    {
      id: "post_5",
      shortCode: "CtEk8sNuP_5",
      displayUrl: "https://images.unsplash.com/photo-1531088009183-b4618da4d84f?w=600&auto=format&fit=crop&q=80",
      caption: "PVP Gaming Consoles 🎮 and Die-Cast car models! Retro game lovers, we have everything you want. #gaming #diecast",
      likesCount: 112,
      commentsCount: 14
    },
    {
      id: "post_6",
      shortCode: "CtHe9vLuO_6",
      displayUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&auto=format&fit=crop&q=80",
      caption: "Kawaii art sets 🎨 & print cameras 📸 for creative kids! Let them print their memories instantly. #creativekids #artsets",
      likesCount: 156,
      commentsCount: 21
    }
  ];
}

runScrape().catch(console.error);
