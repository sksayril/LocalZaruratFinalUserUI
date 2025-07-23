// lib/api.ts - API utility functions

export interface Category {
  _id: string;
  name: string;
  icon: string;
  description: string;
  vendorCount: number;
  slug: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const API_BASE_URL = 'https://api.localzarurat.com/api';

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/customer/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Temporarily disable cache for testing
      next: { revalidate: 0 }, // No cache - fetch fresh data
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse<Category[]> = await response.json();
    
    if (!result.success) {
      throw new Error('API request was not successful');
    }

    return result.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Return empty array as fallback
    return [];
  }
}

export interface Subcategory {
  _id: string;
  name: string;
  image: string;
  thumbnail: string;
  description: string;
  vendorCount: number;
  slug: string;
  mainCategory: {
    _id: string;
    name: string;
    icon: string;
  };
}

export async function fetchSubcategories(mainCategoryId: string): Promise<Subcategory[]> {
  try {
    // Validate mainCategoryId
    if (!mainCategoryId || mainCategoryId.trim() === '') {
      console.error('Error: mainCategoryId is empty or invalid');
      return [];
    }
    
    console.log('Fetching subcategories for mainCategoryId:', mainCategoryId);
    const url = `${API_BASE_URL}/customer/categories/${mainCategoryId}/subcategories`;
    console.log('API URL:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 0 }, // No cache - fetch fresh data
    });

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse<Subcategory[]> = await response.json();
    console.log('API Response:', result);
    
    if (!result.success) {
      throw new Error('API request was not successful');
    }

    console.log('Subcategories found:', result.data.length);
    return result.data;
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    // Return empty array as fallback
    return [];
  }
}

// Generic API function for other endpoints
export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error making API request to ${endpoint}:`, error);
    throw error;
  }
} 