import supabase from '../lib/supabase';
import apiClient from '../lib/api-config.js';

// Generate a unique file name
const generateUniqueFileName = (originalName) => {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 10);
  const extension = originalName.split('.').pop();
  return `${timestamp}-${randomStr}.${extension}`;
};

// Upload video directly to Supabase from the browser
export const uploadVideoToStorage = async (userId, file) => {
  try {
    const fileName = generateUniqueFileName(file.name);
    const filePath = `user-${userId}/${fileName}`;
    
    const { data, error } = await supabase.storage
      .from('videos')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });
    
    if (error) {
      console.error('Supabase video upload error message:', error.message);
      console.error('Supabase video upload error details:', error.details);
      console.error('Supabase video upload error hint:', error.hint);
      console.error('Supabase video upload error status:', error.status);
      throw error;
    }

    console.log('Video uploaded successfully:', data);
    
    // Get public URL
    const { data: urlData } = supabase.storage
      .from('videos')
      .getPublicUrl(filePath);
    
    return { 
      url: urlData.publicUrl,
      storagePath: filePath
    };
  } catch (error) {
    console.error('Error uploading video to Supabase:', error.message || error);
    throw error;
  }
};

// Upload thumbnail directly to Supabase from the browser
export const uploadThumbnailToStorage = async (userId, file) => {
  try {
    const fileName = generateUniqueFileName(file.name);
    const filePath = `user-${userId}/${fileName}`;
    
    const { data, error } = await supabase.storage
      .from('thumbnails')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });
    
    if (error) {
      console.error('Supabase thumbnail upload error message:', error.message);
      console.error('Supabase thumbnail upload error details:', error.details);
      console.error('Supabase thumbnail upload error hint:', error.hint);
      console.error('Supabase thumbnail upload error status:', error.status);
      throw error;
    }

    console.log('Thumbnail uploaded successfully:', data);

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('thumbnails')
      .getPublicUrl(filePath);
    
    return { 
      url: urlData.publicUrl,
      storagePath: filePath
    };
  } catch (error) {
    console.error('Error uploading thumbnail to Supabase:', error.message || error);
    throw error;
  }
};

// Create video with direct upload to Supabase
export const createVideo = async (videoData) => {
  try {
    const response = await apiClient.post('/videos', videoData);
    return response.data;
  } catch (error) {
    console.error('Error creating video:', error);
    throw error;
  }
};