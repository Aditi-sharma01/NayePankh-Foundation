"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users, BadgeIndianRupee } from "lucide-react";

export function Donate() {

  const amounts = ["₹1000", "₹2000", "₹5000", "₹10000"];

  return (

    <section
      id="donate"
      className="
      relative

      py-28

      overflow-hidden

      bg-[#08111f]
      "
    >

      <div className="container-wide section-padding">

        <div className="grid lg:grid-cols-2 gap-16 items-center">


          {/* LEFT SIDE */}


          <motion.div

            initial={{ opacity: 0, x: -50 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

          >

            <div className="relative overflow-hidden rounded-[32px]">

              <Image
  src="/photo9.jpg"
  alt="Donate"
  width={700}
  height={800}
  className="
    rounded-[32px]
    h-[600px]
    w-full
    object-cover
    scale-110
    blur-[2px]
    brightness-75
  "
/>

<div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/85 via-[#08111f]/45 to-[#08111f]/20" />


              <div className="absolute bottom-10 left-10 max-w-md">

                <h2 className="text-5xl font-bold text-white leading-tight">

                  Together,

                  <br />

                  Let&apos;s Make

                  <span className="block text-cyan-400">

                    A Difference

                  </span>

                </h2>


                <p className="text-slate-300 mt-6 leading-relaxed">

                  Every donation brings hope to someone in need.

                  Your support helps us provide education,

                  food, healthcare and opportunities to

                  underprivileged communities.

                  Together we can create a brighter future

                  and transform thousands of lives.

                </p>

              </div>

            </div>


            {/* Stats */}


            <div className="grid grid-cols-2 gap-5 mt-8">


              <div className="glass-card p-6 rounded-3xl">

                <h2 className="text-4xl font-bold text-cyan-400">

                  2L+

                </h2>

                <p className="text-slate-300 mt-2">

                  Lives Impacted

                </p>

              </div>



              <div className="glass-card p-6 rounded-3xl">

                <h2 className="text-4xl font-bold text-cyan-400">

                  500+

                </h2>

                <p className="text-slate-300 mt-2">

                  Volunteers

                </p>

              </div>



              <div className="glass-card p-6 rounded-3xl flex gap-3">

                <ShieldCheck className="text-cyan-400" />

                <div>

                  <p className="font-semibold text-white">

                    Secure

                  </p>

                  <p className="text-slate-400 text-sm">

                    Donations

                  </p>

                </div>

              </div>



              <div className="glass-card p-6 rounded-3xl flex gap-3">

                <BadgeIndianRupee className="text-cyan-400" />

                <div>

                  <p className="font-semibold text-white">

                    80G

                  </p>

                  <p className="text-slate-400 text-sm">

                    Tax Benefits

                  </p>

                </div>

              </div>

            </div>

          </motion.div>



          {/* RIGHT SIDE */}



          <motion.div

            initial={{ opacity: 0, x: 50 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            className="
            glass-card

            p-10

            rounded-[32px]
            "
          >

            <h3 className="text-3xl font-bold text-white mb-8">

              Support Our Mission

            </h3>


            <div className="grid grid-cols-2 gap-4 mb-8">

              {amounts.map((amount) => (

                <button

                  key={amount}

                  className="
                  py-4

                  rounded-2xl

                  bg-white/5

                  border

                  border-white/10

                  hover:border-cyan-400

                  hover:bg-cyan-500/10

                  transition-all

                  text-white
                  "
                >

                  {amount}

                </button>

              ))}

            </div>



            <form className="space-y-5">

              <input

                type="text"

                placeholder="Full Name"

                className="
                w-full

                rounded-2xl

                bg-white/5

                border

                border-white/10

                px-5

                py-4

                text-white

                outline-none
                "
              />



              <input

                type="email"

                placeholder="Email"

                className="
                w-full

                rounded-2xl

                bg-white/5

                border

                border-white/10

                px-5

                py-4

                text-white
                "
              />



              <input

                type="tel"

                placeholder="Phone Number"

                className="
                w-full

                rounded-2xl

                bg-white/5

                border

                border-white/10

                px-5

                py-4

                text-white
                "
              />


              <textarea

                rows={4}

                placeholder="Write a message..."

                className="
                w-full

                rounded-2xl

                bg-white/5

                border

                border-white/10

                px-5

                py-4

                text-white
                "
              />


              <button

                className="
                w-full

                flex

                items-center

                justify-center

                gap-3

                py-5

                rounded-full

                bg-cyan-500

                hover:bg-cyan-400

                text-[#08111f]

                font-bold

                shadow-[0_0_35px_rgba(34,211,238,0.45)]

                transition-all
                "
              >

                <Heart size={20} fill="currentColor" />

                Donate Now

              </button>

            </form>

          </motion.div>


        </div>

      </div>

    </section>

  );

}