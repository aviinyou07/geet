import { NextResponse } from "next/server";
import cloudinary from "@/lib/server/cloudinary";
import { UploadApiResponse } from "cloudinary";

type UploadedFile = {
  originalName: string;
  url: string;
  resourceType: "image" | "video" | "raw";
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files.length) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }

    const uploadedFiles: UploadedFile[] = [];

    for (const file of files) {
      const resourceType: "image" | "video" | "raw" =
        file.type.startsWith("image")
          ? "image"
          : file.type.startsWith("video")
          ? "video"
          : "raw";

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadResult: UploadApiResponse = await cloudinary.uploader.upload(
        `data:${file.type};base64,${buffer.toString("base64")}`,
        { folder: "blogs", resource_type: resourceType }
      );

      uploadedFiles.push({
        originalName: file.name,
        url: uploadResult.secure_url,
        resourceType,
      });
    }

    return NextResponse.json({ files: uploadedFiles });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
