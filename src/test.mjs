
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import {default as tf} from "/mnt/efs/js/lib/node_modules/@tensorflow/tfjs-node";

export default () => {
    const ddb = new DynamoDB();
    console.log(tf);
    
    return {
        statusCode: 200,
        body: "Okay"
    }
}
