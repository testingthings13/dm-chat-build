export interface User {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
}

export interface Conversation {
  id: string;
  user: User;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
}

const users: User[] = [
  { id: "1", name: "Sarah Chen", avatar: "SC", online: true },
  { id: "2", name: "Marcus Johnson", avatar: "MJ", online: true },
  { id: "3", name: "Emily Rodriguez", avatar: "ER", online: false },
  { id: "4", name: "Alex Kim", avatar: "AK", online: true },
  { id: "5", name: "Jordan Lee", avatar: "JL", online: false },
  { id: "6", name: "Priya Sharma", avatar: "PS", online: true },
  { id: "7", name: "David Park", avatar: "DP", online: false },
  { id: "8", name: "Mia Thompson", avatar: "MT", online: true },
];

export const conversations: Conversation[] = [
  {
    id: "1",
    user: users[0],
    lastMessage: "Sure, I'll send the design files over by EOD!",
    lastMessageTime: "2m",
    unreadCount: 3,
    messages: [
      { id: "m1", senderId: "1", text: "Hey! Did you get a chance to look at the new mockups?", timestamp: "10:30 AM", isOwn: false },
      { id: "m2", senderId: "me", text: "Yes! They look fantastic. Love the new color scheme.", timestamp: "10:32 AM", isOwn: true },
      { id: "m3", senderId: "1", text: "Great! I was thinking we could adjust the spacing on the cards a bit.", timestamp: "10:33 AM", isOwn: false },
      { id: "m4", senderId: "me", text: "Agreed. Can you send me the updated Figma link?", timestamp: "10:35 AM", isOwn: true },
      { id: "m5", senderId: "1", text: "Sure, I'll send the design files over by EOD!", timestamp: "10:36 AM", isOwn: false },
    ],
  },
  {
    id: "2",
    user: users[1],
    lastMessage: "The deployment went smoothly 🚀",
    lastMessageTime: "15m",
    unreadCount: 0,
    messages: [
      { id: "m6", senderId: "2", text: "Hey, the CI pipeline is green now.", timestamp: "9:45 AM", isOwn: false },
      { id: "m7", senderId: "me", text: "Nice work! Should we push to staging?", timestamp: "9:50 AM", isOwn: true },
      { id: "m8", senderId: "2", text: "The deployment went smoothly 🚀", timestamp: "10:21 AM", isOwn: false },
    ],
  },
  {
    id: "3",
    user: users[2],
    lastMessage: "Let's sync tomorrow at 2pm",
    lastMessageTime: "1h",
    unreadCount: 1,
    messages: [
      { id: "m9", senderId: "3", text: "We need to discuss the Q2 roadmap.", timestamp: "9:00 AM", isOwn: false },
      { id: "m10", senderId: "me", text: "Absolutely. When works for you?", timestamp: "9:15 AM", isOwn: true },
      { id: "m11", senderId: "3", text: "Let's sync tomorrow at 2pm", timestamp: "9:20 AM", isOwn: false },
    ],
  },
  {
    id: "4",
    user: users[3],
    lastMessage: "I'll review the PR this afternoon",
    lastMessageTime: "2h",
    unreadCount: 0,
    messages: [
      { id: "m12", senderId: "me", text: "Hey Alex, I opened a PR for the auth module.", timestamp: "8:30 AM", isOwn: true },
      { id: "m13", senderId: "4", text: "I'll review the PR this afternoon", timestamp: "8:45 AM", isOwn: false },
    ],
  },
  {
    id: "5",
    user: users[4],
    lastMessage: "Thanks for the feedback!",
    lastMessageTime: "3h",
    unreadCount: 0,
    messages: [
      { id: "m14", senderId: "5", text: "Can you review my latest blog draft?", timestamp: "Yesterday", isOwn: false },
      { id: "m15", senderId: "me", text: "Sure! I left some comments on the doc.", timestamp: "Yesterday", isOwn: true },
      { id: "m16", senderId: "5", text: "Thanks for the feedback!", timestamp: "7:30 AM", isOwn: false },
    ],
  },
  {
    id: "6",
    user: users[5],
    lastMessage: "The API integration is done ✅",
    lastMessageTime: "5h",
    unreadCount: 2,
    messages: [
      { id: "m17", senderId: "6", text: "Working on the Stripe integration today.", timestamp: "Yesterday", isOwn: false },
      { id: "m18", senderId: "me", text: "Let me know if you need help with the webhooks.", timestamp: "Yesterday", isOwn: true },
      { id: "m19", senderId: "6", text: "The API integration is done ✅", timestamp: "5:00 AM", isOwn: false },
    ],
  },
  {
    id: "7",
    user: users[6],
    lastMessage: "See you at standup",
    lastMessageTime: "1d",
    unreadCount: 0,
    messages: [
      { id: "m20", senderId: "7", text: "See you at standup", timestamp: "Yesterday", isOwn: false },
    ],
  },
  {
    id: "8",
    user: users[7],
    lastMessage: "Can we pair on this bug?",
    lastMessageTime: "1d",
    unreadCount: 1,
    messages: [
      { id: "m21", senderId: "8", text: "There's a weird rendering issue on mobile.", timestamp: "Yesterday", isOwn: false },
      { id: "m22", senderId: "me", text: "What browser?", timestamp: "Yesterday", isOwn: true },
      { id: "m23", senderId: "8", text: "Can we pair on this bug?", timestamp: "Yesterday", isOwn: false },
    ],
  },
];
