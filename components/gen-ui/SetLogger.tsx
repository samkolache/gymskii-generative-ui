import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Field, FieldLabel } from "../ui/field";

const EXERCISES = [
  { value: "bench-press", label: "Bench Press" },
  { value: "squat", label: "Squat" },
  { value: "deadlift", label: "Deadlift" },
  { value: "overhead-press", label: "Overhead Press" },
];

function SetLogger() {
  return (
    <Card>
      <CardHeader>
        <h2>Log a set</h2>
        <p className="text-sm text-muted-foreground">Wednesday, Jul 16</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          
          <Field>
            <FieldLabel className="text-xs uppercase text-tertiary-foreground tracking-wider font-bold">
              Exercise
            </FieldLabel>
            <Select defaultValue="bench-press">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {EXERCISES.map((exercise) => (
                  <SelectItem key={exercise.value} value={exercise.value}>
                    {exercise.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <div className="flex gap-4">
            <Field>
              <FieldLabel className="text-xs uppercase text-tertiary-foreground tracking-wider font-bold">
                Weight (lb)
              </FieldLabel>
              <Input type="number" defaultValue={175} />
            </Field>

            <Field>
              <FieldLabel className="text-xs uppercase text-tertiary-foreground tracking-wider font-bold">
                Sets x reps
              </FieldLabel>
              <div className="flex items-center gap-2">
                <Input type="number" defaultValue={3} />
                <span className="text-sm text-tertiary-foreground font-bold">x</span>
                <Input type="number" defaultValue={5} />
              </div>
            </Field>

          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to workout</Button>
      </CardFooter>
    </Card>
  );
}

export default SetLogger;
