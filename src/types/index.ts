interface ObjectMetadata {
    url: string;
    imgix_url: string;
  }
  
  interface ObjectType {
    key: string;
    value: string;
  }
  
  interface JobInfo {
    id: string;
    slug: string;
    title: string;
    content: string;
    bucket: string;
    created_at: string;
    modified_at: string;
    status: string;
    modified_by: string;
    created_by: string;
    publish_at: string | null;
    thumbnail: string;
    unpublish_at: string | null;
    created: string;
    published_at: string;
    type: string;
    metadata: {
      img: ObjectMetadata;
      company: string;
      type: ObjectType;
      location: string;
    };
  }
  
  interface JobsApiResponse {
    objects: JobInfo[];
    total: number;
  }
  
export type  {JobsApiResponse}