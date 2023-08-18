import { createBucketClient } from '@cosmicjs/sdk';
import { JobsApiResponse } from '../types';

const bucket = createBucketClient({
    bucketSlug: 'jobstreet-halo-dek',
    readKey: 'WHCPvDF8AldM0kHL3kyixEwKQcjpCN2YujS5AiAv9IwsjFG92l',
});

export const getjob = async (): Promise<JobsApiResponse> =>{
    try {
        const jobData: JobsApiResponse = await bucket.objects
            .find({
                type: "jobs",

            })
            
            // .props(FIELDS)
            .sort("-created_at")

        return jobData;
    }
    catch (error: unknown) {
        return {} as JobsApiResponse;
    }

};