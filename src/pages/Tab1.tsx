import { logoAndroid, logoGithub } from "ionicons/icons";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.scss";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/custom/mode-toggle";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Skeleton } from "@/components/ui/skeleton";

const Tab1: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { toast } = useToast();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
          <IonButtons slot="end">
            <ModeToggle />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="p-4">
          <Card className="min-w-[320px]">
            <CardHeader className="text-center">
              <CardTitle>Register</CardTitle>
              <CardDescription>Enter Vendor Details</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Input placeholder="Name..." />
              <Input placeholder="Phone..." />
              <Input disabled placeholder="DisabledPhone..." />
              <Button className="w-full flex gap-2">
                <span>Submit</span>
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Button
                variant="outline"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                    action: (
                      <ToastAction altText="Try again">Try again</ToastAction>
                    ),
                  });
                }}
              >
                Show Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast({
                    description: "Your message has been sent.",
                  });
                }}
              >
                Show Toast
              </Button>

              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full mt-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
