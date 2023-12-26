import { WebClient } from "@slack/web-api";
import fs from "fs";
import constants from "../tests/constants/constants";
import { request } from "@playwright/test";
require("dotenv").config();

const token = process.env.SLACK_OAUTH_TOKEN;
const web = new WebClient(token);

export async function sendMessage(channel: string, text: string) {
  try {
    const response = await web.chat.postMessage({
      channel: channel,
      text: text,
    });

    console.log("Message Sent: ", response.ts);
  } catch (error: any) {
    console.error("Error Sending The Message: ", error.data);
  }
}
export async function uploadFile(
  channel: string,
  filePath: string,
  fileName: string,
  message: string
) {
  try {
    // Llama al método files.upload de la API de Slack

    const response = await web.files.upload({
      channels: channel,
      file: fs.createReadStream(filePath),
      filename: fileName,
      initial_comment: message,
    });
    console.log("File Uploaded: ", response.file!.id);
  } catch (error: any) {
    console.error("Error Uploading: ", error.data);
  }
}

export async function sendMessageByBlocks(channel: string) {
  try {
    const response = await web.chat.postMessage({
      channel: channel,
      blocks: constants.BLOCKS,
    });

    console.log("Mensaje enviado: ", response.ts);
  } catch (error) {
    console.error("Error al enviar mensaje: ", error);
  }
}

export async function sendMessageByWebhook(message: any) {
  const context = await request.newContext({
    baseURL: process.env.SLACK_WEBHOOK,
  });
  const response = await context.post("", { data: message });
  console.log(await response.text());
}
