import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Auth() {
  return (
    <>
      <div className="flex">
        <div>
          <Image
            src="/images/auth-section/auth-hero.png"
            alt="auth-image"
            width={1400}
            height={1000}
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div className="w-200">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>
                Already have an account? <Link href={"/"}> sign up</Link>
              </CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <div>
                <FieldGroup>
                  <Field>
                    <Input id="name" placeholder="Your name" />
                  </Field>
                </FieldGroup>
              </div>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
