export interface Comment {
  id: string;
  event_title: string;
  content: string;
  created_at: string;
  user_id: string;
  parent_id: string | null;
  user: {
    nickname: string;
    avatar_url: string | null;
  };
}

export interface NewComment {
  event_title: string;
  content: string;
  user_id: string;
  parent_id?: string;
}