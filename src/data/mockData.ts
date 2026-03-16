import avatar1 from "@/assets/avatars/avatar-1.jpg";
import avatar2 from "@/assets/avatars/avatar-2.jpg";
import avatar3 from "@/assets/avatars/avatar-3.jpg";
import avatar4 from "@/assets/avatars/avatar-4.jpg";
import avatar5 from "@/assets/avatars/avatar-5.jpg";
import avatar6 from "@/assets/avatars/avatar-6.jpg";
import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";
import gallery9 from "@/assets/gallery/gallery-9.jpg";
import gallery10 from "@/assets/gallery/gallery-10.jpg";
import cover1 from "@/assets/covers/cover-1.jpg";
import cover2 from "@/assets/covers/cover-2.jpg";
import cover3 from "@/assets/covers/cover-3.jpg";
import cover4 from "@/assets/covers/cover-4.jpg";
import cover5 from "@/assets/covers/cover-5.jpg";

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  avatarImg?: string;
  online: boolean;
  isCreator?: boolean;
  followers?: number;
  bio?: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  isLocked?: boolean;
  price?: number;
}

export interface Conversation {
  id: string;
  user: User;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isTyping?: boolean;
  messages: Message[];
}

export interface SextingItem {
  id: string;
  text: string;
  mediaUrl?: string;
  price: number;
  hasMedia: boolean;
}

export interface SextingScript {
  id: string;
  title: string;
  votes: number;
  description: string;
  itemCount: number;
  items: SextingItem[];
  thumbnails: string[];
}

export interface Creator {
  id: string;
  name: string;
  username: string;
  avatar: string;
  avatarImg?: string;
  coverImage?: string;
  online: boolean;
  followers: number;
  bio: string;
  isSubscribed: boolean;
  isFollowing: boolean;
  subscriptionPrice?: number;
}

export interface GalleryItem {
  id: string;
  thumbnailUrl: string;
  isLocked: boolean;
  price: number;
  type: "photo" | "video";
}

const avatarImages = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
export const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10];

const users: User[] = [
  { id: "1", name: "Jamie O", username: "jamieo", avatar: "JO", avatarImg: avatar1, online: true, isCreator: true, followers: 21000, bio: "Welcome to my Chatabox ✨" },
  { id: "2", name: "Jammie", username: "jammie", avatar: "JM", avatarImg: avatar2, online: true, isCreator: true },
  { id: "3", name: "Spencer", username: "spencer", avatar: "SP", avatarImg: avatar3, online: false, isCreator: true },
  { id: "4", name: "Jewel Diamant", username: "jeweldiamant", avatar: "JD", avatarImg: avatar4, online: true, isCreator: true },
  { id: "5", name: "Gemma Vixen", username: "gemmavixen", avatar: "GV", avatarImg: avatar5, online: true, isCreator: true },
  { id: "6", name: "Lucy Diamant", username: "lucydiamant", avatar: "LD", avatarImg: avatar6, online: false, isCreator: true },
  { id: "me", name: "Jane Doe", username: "janedoe", avatar: "JD", online: true },
];

export const conversations: Conversation[] = [
  {
    id: "1",
    user: users[0],
    lastMessage: "You have to check these out..",
    lastMessageTime: "1 hour ago",
    unreadCount: 3,
    messages: [
      { id: "m1", senderId: "1", text: "Hey there 👋", timestamp: "12:30pm", isOwn: false },
      { id: "m2", senderId: "1", text: "Damn, you really just popped up on my feed and ruined my focus", timestamp: "12:34pm", isOwn: false },
      { id: "m3", senderId: "me", text: "Haha oops not sorry tho 😏", timestamp: "12:34pm", isOwn: true },
      { id: "m4", senderId: "1", text: "I see that you always know exactly what you're doing, huh?", timestamp: "12:34pm", isOwn: false },
      { id: "m5", senderId: "me", text: "Guilty 😈\nJust here to cause a little distraction", timestamp: "12:34pm", isOwn: true },
    ],
  },
  {
    id: "2",
    user: users[1],
    lastMessage: "How has your day been today..",
    lastMessageTime: "1 hour ago",
    unreadCount: 0,
    messages: [
      { id: "m6", senderId: "2", text: "Hey babe! How's it going?", timestamp: "11:00am", isOwn: false },
      { id: "m7", senderId: "me", text: "Pretty good! Just chilling", timestamp: "11:15am", isOwn: true },
      { id: "m8", senderId: "2", text: "How has your day been today..", timestamp: "11:30am", isOwn: false },
    ],
  },
  {
    id: "3",
    user: { ...users[2], id: "3b", name: "Spencer" },
    lastMessage: "OMG that was amazing vid..",
    lastMessageTime: "1 hour ago",
    unreadCount: 1,
    messages: [
      { id: "m9", senderId: "3b", text: "OMG that was amazing vid..", timestamp: "10:00am", isOwn: false },
    ],
  },
  {
    id: "4",
    user: { id: "4b", name: "Dude", username: "dude", avatar: "DU", avatarImg: avatar4, online: true },
    lastMessage: "Dude is typing...",
    lastMessageTime: "now",
    unreadCount: 0,
    isTyping: true,
    messages: [
      { id: "m10", senderId: "me", text: "Yo what's up?", timestamp: "9:30am", isOwn: true },
    ],
  },
  {
    id: "5",
    user: { ...users[4], id: "5b", name: "Gemma Vixen" },
    lastMessage: "You there babe, wanted to ask..",
    lastMessageTime: "1 hour ago",
    unreadCount: 0,
    messages: [
      { id: "m11", senderId: "5b", text: "You there babe, wanted to ask..", timestamp: "8:30am", isOwn: false },
    ],
  },
  {
    id: "6",
    user: { ...users[5], id: "6b", name: "Lucy Diamant" },
    lastMessage: "That outfit is looking great on..",
    lastMessageTime: "1 hour ago",
    unreadCount: 0,
    messages: [
      { id: "m12", senderId: "6b", text: "That outfit is looking great on..", timestamp: "8:00am", isOwn: false },
    ],
  },
  {
    id: "7",
    user: { ...users[3], id: "7b", name: "Jewel Diamant" },
    lastMessage: "Damn, you are unreal",
    lastMessageTime: "1 hour ago",
    unreadCount: 2,
    messages: [
      { id: "m13", senderId: "7b", text: "Damn, you are unreal", timestamp: "7:00am", isOwn: false },
    ],
  },
];

export const creators: Creator[] = [
  {
    id: "1",
    name: "Sarah McDonals",
    username: "sarahmc",
    avatar: "SM",
    avatarImg: avatar1,
    coverImage: cover1,
    online: true,
    followers: 21000,
    bio: "Welcome to my Chatabox, I run this account on my own and reply to all your lovely messages.",
    isSubscribed: true,
    isFollowing: true,
    subscriptionPrice: 9.99,
  },
  {
    id: "2",
    name: "Spencer",
    username: "spencer",
    avatar: "SP",
    avatarImg: avatar3,
    coverImage: cover2,
    online: true,
    followers: 15000,
    bio: "Your favorite content creator 💋",
    isSubscribed: false,
    isFollowing: false,
    subscriptionPrice: 14.99,
  },
  {
    id: "3",
    name: "Jewel Diamant",
    username: "jeweldiamant",
    avatar: "JD",
    avatarImg: avatar4,
    coverImage: cover3,
    online: false,
    followers: 8500,
    bio: "Exclusive content just for you ✨",
    isSubscribed: true,
    isFollowing: true,
    subscriptionPrice: 12.99,
  },
  {
    id: "4",
    name: "Gemma Vixen",
    username: "gemmavixen",
    avatar: "GV",
    avatarImg: avatar5,
    coverImage: cover4,
    online: true,
    followers: 32000,
    bio: "Come play with me 🔥",
    isSubscribed: false,
    isFollowing: true,
    subscriptionPrice: 19.99,
  },
  {
    id: "5",
    name: "Lucy Diamant",
    username: "lucydiamant",
    avatar: "LD",
    avatarImg: avatar6,
    coverImage: cover5,
    online: true,
    followers: 12000,
    bio: "New content daily 💕",
    isSubscribed: true,
    isFollowing: true,
    subscriptionPrice: 7.99,
  },
];

export const sextingScripts: SextingScript[] = [
  {
    id: "1",
    title: "Sexting Script",
    votes: 69,
    description: "This is a mock sexting set with 22 items",
    itemCount: 22,
    items: Array.from({ length: 22 }, (_, i) => ({
      id: `item-${i + 1}`,
      text: `This is some mock text for item ${i + 1} that the user can read and see if they really like it`,
      price: 20.0,
      hasMedia: i % 3 === 0,
    })),
    thumbnails: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
  },
  {
    id: "2",
    title: "Sexting Script",
    votes: 69,
    description: "This is a mock sexting set with 22 items",
    itemCount: 22,
    items: Array.from({ length: 22 }, (_, i) => ({
      id: `item-${i + 1}`,
      text: `This is some mock text for item ${i + 1} that the user can read and see if they really like it`,
      price: 20.0,
      hasMedia: i % 3 === 0,
    })),
    thumbnails: [gallery5, gallery6, gallery7, gallery8, gallery9, gallery10],
  },
  {
    id: "3",
    title: "Sexting Script",
    votes: 69,
    description: "This is a mock sexting set with 22 items",
    itemCount: 22,
    items: Array.from({ length: 22 }, (_, i) => ({
      id: `item-${i + 1}`,
      text: `This is some mock text for item ${i + 1} that the user can read and see if they really like it`,
      price: 20.0,
      hasMedia: i % 3 === 0,
    })),
    thumbnails: ["1", "2", "3", "4", "5", "6"],
  },
];

export const galleryItems: GalleryItem[] = Array.from({ length: 12 }, (_, i) => ({
  id: `g-${i + 1}`,
  thumbnailUrl: galleryImages[i % galleryImages.length],
  isLocked: i % 2 === 0,
  price: 35.50,
  type: i % 4 === 0 ? "video" as const : "photo" as const,
}));

export const currentUser: User = users[users.length - 1];
