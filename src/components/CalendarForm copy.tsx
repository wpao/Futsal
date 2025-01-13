"use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { cn } from "@/lib/utils";
// import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// redux (by : paozan)
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { useState } from "react";
// import { RootState } from "../store/store";

// const FormSchema = z.object({
//   dob: z.date({
//     required_error: "A date of birth is required.",
//   }),
// });

export function CalendarForm() {
  // redux (by : paozan)
  const [date, setDate] = useState("2025-01-13");

  // redux (by : paozan)
  // redux menggunakan dispatch untuk mengubah state global
  const dispatch = useDispatch();

  // by : shadcn
  // const [date, setDate] = useState<Date | undefined>(new Date());

  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  // });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   console.log(data);
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   });
  // }

  // redux (by : paozan)
  // const dateSelector = useSelector((state: RootState) => state.date);
  const setDateInput = () => {
    dispatch({ type: "DATE_CHANGE_TAHUNBULANTANGGAL", payload: date });
    // console.log(date);
  };

  // console.log(date?.toISOString().split("T")[0]);
  return (
    <>
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form> */}
      <div>
        <Input
          placeholder="yyyy-mm-dd"
          type="string"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>

      {/* <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      /> */}

      {/* <p>{date?.toISOString().split("T")[0]}</p> */}

      <Button className="mt-4" onClick={setDateInput}>
        timec
      </Button>
    </>
  );
}