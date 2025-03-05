import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/recipe-card";
import FeaturedRecipeCard from "@/components/featured-recipe-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 to-emerald-800">
      {/* noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-[linear-gradient(rgba(0,0,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[size:4px_4px]"></div>
      {/* mesh circle */}
      <div className="animate-float fixed -top-[100px] -left-[200px] h-[500px] w-[500px] rounded-full bg-[rgba(106,90,205,0.15)] blur-[50px]"></div>
      <div className="animate-float fixed -right-[200px] -bottom-[200px] h-[500px] w-[500px] rounded-full bg-[rgba(255,105,180,0.15)] blur-[50px] delay-[-5s]"></div>

      <div className="relative z-20">
        <header className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <div className="bg-emerald-400 px-2 py-1 text-lg font-bold text-emerald-950">
                  FOOD
                </div>
                <span className="ml-1 font-medium text-white">BLOG</span>
              </Link>
            </div>

            <nav className="flex items-center space-x-6 text-sm text-white">
              <Link href="/" className="font-medium hover:text-emerald-300">
                HOME
              </Link>
              <Link
                href="/about"
                className="font-medium hover:text-emerald-300"
              >
                ABOUT
              </Link>
              <Link
                href="/recipes"
                className="font-medium hover:text-emerald-300"
              >
                RECIPES
              </Link>
              <Link
                href="/contact"
                className="font-medium hover:text-emerald-300"
              >
                CONTACT
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-transparent hover:text-emerald-300"
              >
                <Search className="h-5 w-5" />
              </Button>
            </nav>

            <div className="mt-4 hidden items-center space-x-4 text-white md:mt-0 md:flex">
              <Link href="#" className="hover:text-emerald-300">
                <Search className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="relative mb-16">
            <div className="flex flex-col items-start">
              <h1 className="mb-8 text-5xl leading-tight font-bold tracking-tighter text-white md:text-7xl lg:text-8xl">
                <span className="block">THE</span>
                <span className="flex items-center">
                  FLAVORS
                  <div className="relative ml-2 hidden h-24 w-24 md:block md:h-32 md:w-32">
                    <Image
                      src="/assets/1.jpg"
                      alt="Avocados"
                      width={128}
                      height={128}
                      className="rounded-md object-cover"
                    />
                  </div>
                </span>
                <span className="flex items-center">
                  <div className="relative mr-2 hidden h-20 w-20 md:block md:h-24 md:w-24">
                    <Image
                      src="/assets/2.jpg"
                      alt="Food"
                      width={96}
                      height={96}
                      className="rounded-md object-cover"
                    />
                  </div>
                  OF DEPTH
                </span>
                <span className="flex items-center">
                  NATURE
                  <div className="relative ml-2 hidden h-16 w-32 md:block md:h-20 md:w-40">
                    <Image
                      src="/assets/3.jpg"
                      alt="Avocados"
                      width={160}
                      height={80}
                      className="rounded-md object-cover"
                    />
                  </div>
                </span>
              </h1>
            </div>
          </section>

          <section className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <RecipeCard
              title="THE BEST VEGAN BROCCOLI CHEESE SOUP"
              image="/assets/4.jpg"
              category="VEGETABLE"
              slug="/recipes/vegan-broccoli-cheese-soup"
            />
            <RecipeCard
              title="HOW TO MAKE PERFECT HARD, MEDIUM, AND SOFT BOILED EGGS QUICKLY EVERY TIME"
              image="/assets/5.jpg"
              category="BREAKFAST DINNER"
              slug="/recipes/perfect-boiled-eggs"
            />
          </section>

          <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <RecipeCard
              title="THE 10 VEGETARIAN RECIPES WE EAT WEEK AFTER WEEK"
              image="/assets/6.jpg"
              category="VEGETARIAN"
              slug="/recipes/vegetarian-recipes-weekly"
              compact={true}
            />
            <RecipeCard
              title="CRISPY BLACK BEAN TACOS WITH AVOCADO CREAM"
              image="/assets/6.jpg"
              category="DINNER"
              slug="/recipes/crispy-black-bean-tacos"
              compact={true}
            />
            <RecipeCard
              title="EVERYTHING YOU EVER WANTED TO KNOW ABOUT SEITAN"
              image="/assets/6.jpg"
              category="GUIDE"
              slug="/recipes/seitan-guide"
              compact={true}
            />
          </section>

          {/* OF THE MONTH */}
          <section className="mt-16 mb-16">
            <h2 className="mb-10 text-center text-5xl font-bold text-white md:text-6xl">
              OF THE MONTH
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Recipe Card 1 */}
              <FeaturedRecipeCard
                title="THE EASIEST EVER OSSO BUCO"
                image="/assets/7.jpg"
                category="ITALIAN FOOD"
                rating={5}
                reviewCount="30+"
                description="Always serves too much hot fudge sundae on hot fudge sundaes. It makes people overjoyed and puts them in your debt."
              />

              {/* Recipe Card 2 */}
              <FeaturedRecipeCard
                title="THE EASIEST EVER OSSO BUCO"
                image="/assets/7.jpg"
                category="ITALIAN FOOD"
                rating={5}
                reviewCount="30+"
                description="Always serves too much hot fudge sundae on hot fudge sundaes. It makes people overjoyed and puts them in your debt."
              />

              {/* Recipe Card 3 */}
              <FeaturedRecipeCard
                title="THE EASIEST EVER OSSO BUCO"
                image="/assets/7.jpg"
                category="ITALIAN FOOD"
                rating={5}
                reviewCount="30+"
                description="Always serves too much hot fudge sundae on hot fudge sundaes. It makes people overjoyed and puts them in your debt."
              />

              {/* Recipe Card 4 */}
              <FeaturedRecipeCard
                title="THE EASIEST EVER OSSO BUCO"
                image="/assets/7.jpg"
                category="ITALIAN FOOD"
                rating={5}
                reviewCount="30+"
                description="Always serves too much hot fudge sundae on hot fudge sundaes. It makes people overjoyed and puts them in your debt."
              />

              {/* Recipe Card 5 */}
              <FeaturedRecipeCard
                title="THE EASIEST EVER OSSO BUCO"
                image="/assets/7.jpg"
                category="ITALIAN FOOD"
                rating={5}
                reviewCount="30+"
                description="Always serves too much hot fudge sundae on hot fudge sundaes. It makes people overjoyed and puts them in your debt."
              />

              {/* Recipe Card 6 */}
              <FeaturedRecipeCard
                title="54 BEST CHICKEN THIGH RECIPES"
                image="/assets/7.jpg"
                category="CHICKEN RECIPES"
                rating={5}
                reviewCount="30+"
                description="Always serves too much hot fudge sundae on hot fudge sundaes. It makes people overjoyed and puts them in your debt."
              />
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                className="cursor-pointer border-white bg-emerald-800 text-white transition duration-100 hover:text-emerald-800"
              >
                EXPLORE ALL RECIPES
              </Button>
            </div>
          </section>

          <section className="mt-24 mb-16">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="lg:w-2/3">
                <h2 className="mb-8 text-5xl leading-tight font-bold text-white md:text-6xl lg:text-7xl">
                  YOU WANT TO REVIEW YOUR FOOD?
                </h2>
                <p className="mb-8 max-w-2xl text-lg text-gray-300">
                  Listen to the people who love you. Believe that they are worth
                  living for even when you don't believe it. Seek out the
                  memories depression takes away and project them into the
                  future.
                </p>
              </div>

              <div className="flex justify-center lg:w-1/3 lg:justify-end">
                <Button className="bg-white px-8 py-6 text-lg font-semibold text-emerald-900 hover:bg-emerald-100">
                  CONTACT WITH US
                </Button>
              </div>
            </div>
          </section>
        </main>

        <div className="fixed top-1/2 right-0 hidden -translate-y-1/2 transform bg-emerald-400 px-2 py-4 text-xs font-bold tracking-widest text-emerald-950 [writing-mode:vertical-rl] lg:block">
          SCROLL DOWN
        </div>
      </div>
    </div>
  );
}
