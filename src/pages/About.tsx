import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./../components/ui/card";
import { Separator } from "./../components/ui/separator";
import { Target, Eye, Car } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
        <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
          FourWhlKart is a modern used-car marketplace designed to make buying
          and selling cars simple, transparent, and trustworthy.
        </p>
      </div>

      <Separator className="mb-10" />

      {/* Company Description */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-primary" />
            Who We Are
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground leading-relaxed">
          FourWhlKart is an E-Commerce application built using React, TypeScript
          and Tailwind CSS. The platform connects buyers and sellers of used
          vehicles by providing detailed listings, real-time search and
          filtering, favorites, and secure authentication.
          <br />
          <br />
          Our goal is to remove friction from the used-car experience and
          empower users with the right information to make confident decisions.
        </CardContent>
      </Card>

      {/* Mission & Vision */}
      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            To simplify the used-car buying and selling process by offering a
            reliable, user-friendly, and data-driven platform that builds trust
            between buyers and sellers.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-600" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            To become a go-to digital marketplace for pre-owned vehicles by
            leveraging modern technology, clean design, and scalable
            architecture.
          </CardContent>
        </Card>
      </div>

      {/* Team Section */}
      {/* <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-600" />
            Our Team
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground leading-relaxed">
          FourWhlKart is developed and maintained by a passionate full-stack
          developer with strong expertise in React, TypeScript, .NET Core, and
          SQL.
          <br />
          <br />
          The project demonstrates real-world application architecture, clean UI
          design, state management, authentication, and performance-focused
          backend development — making it both a functional product and a
          portfolio-grade application.
        </CardContent>
      </Card> */}
    </div>
  );
};
export default About;
// const About = () => {
//   return (
//     <main className="py-6 prose max-w-none">
//       <h1>About Fourwhlkart</h1>
//       <p>
//         <strong>Fourwhlkart</strong> helps people discover reliable used cars
//         quickly. Our mission is to make buying/selling cars simple and
//         transparent.
//       </p>
//     </main>
//   );
// };
// export default About;
