import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { AvatarFallback } from "@radix-ui/react-avatar";

export const metadata: Metadata = {
    title: "About Me",
    description: "Information about me",
  };

export default async function AboutPage() {
    return (
        <div className="container max-w-6xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-x-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">
                        About me
                    </h1>
                </div>
            </div>
            <hr className="my-8" />
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                <div className="min-w-40 max-w-48 flex flex-col gap-2">
                    <Avatar className="h-48 w-48">
                        <AvatarImage src="/avatar.png" alt={siteConfig.author} />
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold text-center break-words">
                        {siteConfig.author}
                    </h2>
                    <p className="text-muted-foreground text-center break-words">
                        Software Developer
                    </p>
                    </div>
                    <p className="text-muted-foreground text-lg py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum corporis sequi molestias minima sint repudiandae, beatae vel fugiat ratione sit praesentium labore sapiente assumenda officiis commodi veniam omnis eligendi saepe.
                    </p>
                
            </div>
        </div>
    )
}