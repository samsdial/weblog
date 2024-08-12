import { ImageResponse } from "next/og";

export const runtime = "edge";

const interBold = fetch(new URL("../../../assets/fonts/Inter-Bold.otf", import.meta.url)).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
    try {
        const fontBold = await interBold;
        const { searchParams } = req.nextUrl;
        const title = searchParams.get("title");
        if(!title){
            return new Response("No title provided", {status: 500})
        }

        const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title;

        return new ImageResponse(<div></div>,{
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "inter",
                    data: fontBold,
                    style: "normal",
                    weight: 700,
                },
            ],
        });
    }catch(error) {
        return new Response("Failed to generate image", {status: 500});
    }
}