"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { ImagesSlider } from "~~/components/ui/images-slider";

const Sword: NextPage = () => {
  const images = ["/images/sword.webp", "/images/sword2.webp"];

  return (
    <>
      <div className="flex items-center flex-col flex-grow">
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
              $SWORD Relaunch Roadmap
            </motion.p>
            <div className="w-1/2 text-md md:text-lg text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
              The transition from $DRAGON to $SWORD is designed to address key issues around token supply control,
              creating a more balanced and sustainable ecosystem. By adopting $SWORD, we aim to enhance utility, improve
              tokenomics, and establish a token that drives value and long-term growth for the Trần Hưng Đạo AI
              community.
            </div>
            <Link
              href="https://creator.bid/agents/6795233f13f3c4f3f590c1c0"
              className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
            >
              <span>BUY $SWORD →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </Link>
            <Link
              href="https://t.me/tranhungdaoai"
              className="px-4 py-2 backdrop-blur-sm border bg-orange-300/10 border-orange-500/20 text-white mx-auto text-center rounded-full relative mt-4"
            >
              <span>JOIN TELEGRAM</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-500 to-transparent" />
            </Link>
            <Link
              href="https://x.com/TranHungDaoAI"
              className="px-4 py-2 backdrop-blur-sm border bg-orange-300/10 border-orange-500/20 text-white mx-auto text-center rounded-full relative mt-4"
            >
              <span>FOLLOW X</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-500 to-transparent" />
            </Link>
          </motion.div>
        </ImagesSlider>
      </div>
      <div className="flex flex-col items-center justify-center p-5 lg:p-20">
        <h1 className="text-2xl font-bold p-4">
          🎯 Roadmap: <span className="badge text-lg">$SWORD</span> Relaunch Q1 2025
        </h1>

        <div>
          <div className="bg-primary text-primary-content grid h-fit w-fit place-content-center rounded p-10 gap-3">
            <h2 className="font-bold text-primary-content text-2xl">Utility Expansion</h2>

            <div className="">
              <strong>Tipping:</strong> $SWORD will be integrated as the primary currency for tipping active community
              members, fostering engagement and rewarding contributions within the ecosystem.
            </div>
            <div>
              <strong>Staking Rewards:</strong> Users will be able to stake $SWORD to earn rewards, incentivizing
              long-term holding and participation in the ecosystem.
            </div>
            <div className="">
              <strong>On-Chain Actions:</strong> $SWORD will be used for executing advanced on-chain workflows, such as
              governance voting, unlocking premium features, and facilitating other high-level actions that drive
              ecosystem interaction. Additionally, AI Agent capabilities will expand to execute on-chain actions
              seamlessly, leveraging technologies like <u>ElizaOS</u> or <u>Base AgentKit</u> for enhanced
              decision-making and user interaction. Integration with data layers like <u>The Graph</u> will provide
              deeper insights and smarter on-chain workflows for the community.
            </div>
          </div>
          <div className="bg-accent text-accent-content grid h-fit w-fit place-content-center rounded p-10 gap-3">
            <h2 className="font-bold text-accent-content text-2xl">Strong & Improved Tokenomics</h2>

            <div>
              <div className="flex items-center py-2">
                <input
                  checked
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Approved</label>
              </div>
              <strong>Team Token Lock:</strong> 40% of the team’s $SWORD allocation will be locked for a 12-month
              period, reinforcing the {`team's`} long-term commitment to the project and demonstrating confidence in the
              {`ecosystem's `} future growth.
            </div>
            <div>
              <div className="flex items-center py-2">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Proposal Submitted</label>
              </div>
              <strong>Buyback Program:</strong> A portion of project funds will be allocated to buy back and burn
              $DRAGON tokens. This initiative will help stabilize the value of the token and show responsibility for the
              initial token launch.
            </div>
          </div>
          <div className="bg-secondary text-secondary-content grid h-fit w-fit place-content-center p-10 rounded gap-3">
            <h2 className="font-bold text-secondary-content text-2xl">Hall of Honor</h2>
            <div>
              <strong>On-Chain Leaderboard:</strong> We will create a leaderboard that recognizes the early supporters
              of Trần Hưng Đạo AI. This on-chain Hall of Honor will showcase the contributions and commitment of the
              community, providing recognition and incentives to early adopters.
            </div>
          </div>
          <div className="bg-primary text-secondary-content grid h-fit w-fit place-content-center p-10 rounded gap-3">
            <h2 className="font-bold text-secondary-content text-2xl">Community Engagement</h2>
            <div>
              <strong>AMA Sessions:</strong> Live Q&A sessions will be hosted to address any concerns, provide
              transparency, and rebuild confidence within the community. This ensures open communication and
              demonstrates our commitment to addressing any issues head-on.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sword;
