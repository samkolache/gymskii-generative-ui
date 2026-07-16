import { 
    Card,
    CardHeader,
    CardContent


 } from "../ui/card";

function WelcomeWidget() {
    return (
        <Card>
            <CardHeader>
                <p className="text-sm font-semibold text-muted-foreground">Wednesday, July 16</p>
                <h1 className="text-2xl font-bold">Good morning, Sam</h1>
            </CardHeader>
            <CardContent>
                <div className="flex gap-3">
                    <div className="flex flex-col gap-2 border border-border-light py-3 px-4 rounded-sm ">
                    <p className="text-xs uppercase text-tertiary-foreground tracking-wider font-bold">Streak</p>
                    <p className="text-xl text-foreground font-bold">21 Days</p>
                    <div className="flex gap-1.5">
                        {[true, true, true, false, true, true, true].map((filled, i) => (
                            <div
                                key={i}
                                className={`size-3.5 rounded-xs ${filled ? "bg-primary" : "bg-muted"}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2 border border-border-light py-3 px-4 rounded-sm ">
                    <p className="text-xs uppercase text-tertiary-foreground tracking-wider font-bold">Today's Workout</p>
                    <p className="text-xl font-bold">Rest Day</p>
                    <p className="text-sm text-muted-foreground">Beat your PR on Bench (75 x 4)</p>
                </div>
                <div className="flex flex-col gap-2 border border-border-light py-3 px-4 rounded-sm ">
                    <p className="text-xs uppercase text-tertiary-foreground tracking-wider font-bold">Last Workout</p>
                    <p className="text-xl font-bold">Push day · Jul 15</p>
                    <p className="text-sm text-muted-foreground">4 exercises · top set 175 lb bench</p>
                </div>
                </div>
                
            </CardContent>
        </Card>
    )
}


export default WelcomeWidget;