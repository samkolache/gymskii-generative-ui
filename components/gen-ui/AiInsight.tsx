import { Sparkles } from "lucide-react";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter


 } from "../ui/card";


function AiInsight() {
    return (
        <Card>
            <CardHeader>
                <div className="flex gap-2 items-center">
                    <Sparkles className="size-7 text-primary bg-[#eaf2f9] p-[6px] rounded-sm" />
                    <h2 className="text-primary">AI Insight</h2>
                </div>    
            </CardHeader>
            <CardContent>
                <p className="leading-relaxed">
                    Your bench press top set increased 30 lb over the last 11 sessions (+20.7%). Squat has held at 225 lb for 3 consecutive sessions —
                    a small rep-range change may restart progress.
                </p>
            </CardContent>
            <CardFooter className="">
                <p className="text-xs text-tertiary-foreground">Based on the last 30 days · 8 logged sets</p>
            </CardFooter>
        </Card>
    )
}


export default AiInsight;