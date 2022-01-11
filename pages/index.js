import React from 'react'
import Head from 'next/head'

import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import TestimonialsCard from '../components/testimonials-card'
import StatsCard from '../components/stats-card'
import StoreBanner from '../components/store-banner'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>OttoV2</title>
          <meta property="og:title" content="OttoV2" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cbeeeb0d-0df3-416b-9adc-59dd7e3bb890/49572208-80a6-4ed1-8404-5c60b9d4872d?org_if_sml=1"
          />
        </Head>
        <div data-role="Header" className="header-container">
          <header className="header">
            <div className="logo">
              <img
                alt="image"
                src="/playground_assets/logotype-dark.svg"
                className="image"
              />
            </div>
            <div className="menu">
              <span className="text">About</span>
              <span className="text01">Products</span>
              <span className="text02">Pricing</span>
              <span className="text03">Blog</span>
              <span className="text04">Jobs</span>
              <span className="text05">More</span>
              <svg viewBox="0 0 1024 1024" className="icon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div data-type="BurgerMenu" className="burger-menu">
              <svg viewBox="0 0 1024 1024" className="menu1">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
          </header>
          <div data-type="MobileMenu" className="mobile-menu">
            <div className="top">
              <div className="logo1">
                <img
                  alt="image"
                  src="/playground_assets/logotype-dark.svg"
                  className="image01"
                />
              </div>
              <div data-type="CloseMobileMenu" className="close-menu">
                <svg viewBox="0 0 1024 1024" className="icon05">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="mid">
              <span className="text06">About</span>
              <span className="text07">Products</span>
              <span className="text08">Pricing</span>
              <span className="text09">Blog</span>
              <span className="text10">Jobs</span>
              <span className="text11">More</span>
            </div>
            <div className="bot">
              <div className="container01">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link"
                >
                  <div className="container02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="icon07"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link1"
                >
                  <div className="container03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="icon09"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link2"
                >
                  <div className="container04">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="icon11"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link3"
                >
                  <div className="container05">
                    <svg viewBox="0 0 1024 1024" className="icon13">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="blur-background"></div>
          <div className="hero">
            <div className="container06">
              <h1 className="heading headline1">
                <span>
                  No te quedes con
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  las ganas de
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>escalar.</span>
              </h1>
              <PrimaryButton button="Me apunto"></PrimaryButton>
            </div>
            <img
              alt="map view"
              src="/playground_assets/phone%20mockuphomemap.svg"
              className="image02"
            />
          </div>
          <img
            alt="image"
            src="/playground_assets/green%20circle.svg"
            className="turquoise-cirble"
          />
          <img
            alt="image"
            src="/playground_assets/brown%20circle.svg"
            className="purple-circle"
          />
          <img
            alt="image"
            src="/playground_assets/left1.svg"
            className="left"
          />
          <img
            alt="image"
            src="/playground_assets/right1.svg"
            className="right"
          />
        </div>
        <div className="belay">
          <div className="container07">
            <h2 className="headline2 text17">
              <span className="text18">
                Encuentra a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>tu nuevo compaÃ±ero de escalada.</span>
            </h2>
            <span className="text20 lead1">
              <span className="text21">
                No pierdas la ocasiÃ³n de disfrutar de la escalada por falta de
                un compaÃ±ero que te asegure. â¨OttoÂ® te permite encontrar la
                persona que mejor se adapte a tu estilo y nivel de escalada.
              </span>
            </span>
          </div>
          <div className="image-large"></div>
          <div className="image-small"></div>
        </div>
        <div className="community">
          <div className="container08">
            <div className="content">
              <h3 className="text22 headline3">Comunidad</h3>
              <span className="text23 lead1">
                <span className="text24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Condimentum diam orci pretium a pharetra, feugiat cursus.
                  Dictumst risus, sem egestas odio cras adipiscing vulputate.
                  Nisi, risus in suscipit non. Non commodo volutpat, pharetra,
                  vel.
                </span>
              </span>
            </div>
            <div className="phone">
              <img
                alt="list view"
                src="/playground_assets/iphone%20xcommunity1.svg"
                className="image03"
              />
            </div>
          </div>
        </div>
        <div className="user-info">
          <div className="container09">
            <img
              alt="details view"
              src="/playground_assets/iphone%20x.svg"
              image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
              className="image04"
            />
          </div>
          <div className="container10">
            <h3 className="headline3">Todas las info</h3>
            <span className="text26 lead1">
              <span className="text27">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum diam orci pretium a pharetra, feugiat cursus.
                Dictumst risus, sem egestas odio cras adipiscing vulputate.
                Nisi, risus in suscipit non. Non commodo volutpat, pharetra,
                vel.
              </span>
            </span>
          </div>
        </div>
        <div className="app-feature">
          <h3 className="text28 headline3">App Feature</h3>
          <div className="container11">
            <div className="list">
              <div className="line-1">
                <img
                  alt="image"
                  src="/playground_assets/multimedia_%5B607%5D.svg"
                  className="image05"
                />
                <div className="container12">
                  <div className="container13">
                    <img
                      alt="image"
                      src="/playground_assets/multimedia_%5B607%5D.svg"
                      className="image06"
                    />
                    <h3 className="text29 headline5">Agradecimientos</h3>
                  </div>
                  <span className="text30 lead1">
                    <span className="text31">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit morbi a, mi egestas eu amet mauris adipiscing.
                    </span>
                  </span>
                </div>
              </div>
              <div className="line-2">
                <img
                  alt="image"
                  src="/playground_assets/group%2066.svg"
                  className="image07"
                />
                <div className="container14">
                  <div className="container15">
                    <img
                      alt="image"
                      src="/playground_assets/group%2066.svg"
                      className="image08"
                    />
                    <h3 className="text32 headline5">Amigos</h3>
                  </div>
                  <span className="text33 lead1">
                    <span className="text34">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit morbi a, mi egestas eu amet mauris adipiscing.
                    </span>
                  </span>
                </div>
              </div>
              <div className="line-3">
                <img
                  alt="image"
                  src="/playground_assets/frame%2058.svg"
                  className="image09"
                />
                <div className="container16">
                  <div className="container17">
                    <img
                      alt="image"
                      src="/playground_assets/frame%2058.svg"
                      className="image10"
                    />
                    <h3 className="text35 headline5">Salidas recientes</h3>
                  </div>
                  <span className="text36 lead1">
                    <span className="text37">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit morbi a, mi egestas eu amet mauris adipiscing.
                    </span>
                  </span>
                </div>
              </div>
              <div className="line-4">
                <img
                  alt="image"
                  src="/playground_assets/stellafat%201.svg"
                  className="image11"
                />
                <div className="container18">
                  <div className="container19">
                    <img
                      alt="image"
                      src="/playground_assets/stellafat%201.svg"
                      className="image12"
                    />
                    <h3 className="text38 headline5">ReseÃ±as</h3>
                  </div>
                  <span className="text39 lead1">
                    <span className="text40">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit morbi a, mi egestas eu amet mauris adipiscing.
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="phone1">
              <img
                alt="list view"
                src="/playground_assets/iphone%20xbadges.svg"
                className="image13"
              />
            </div>
          </div>
        </div>
        <div className="features">
          <h2 className="headline2 text41">Tailor-made features</h2>
          <span className="text42">
            <span className="text43">
              Lorem ipsum is common placeholder text used to demonstrate the
              graphic elements of a document or visual presentation.
            </span>
          </span>
          <div className="features1">
            <FeatureCard title="Robust workflow"></FeatureCard>
            <FeatureCard
              title="Flexibility"
              image_src="/playground_assets/02.svg"
            ></FeatureCard>
            <FeatureCard
              title="User friendly"
              image_src="/playground_assets/03.svg"
            ></FeatureCard>
            <FeatureCard
              title="Multiple layouts"
              image_src="/playground_assets/04.svg"
            ></FeatureCard>
            <FeatureCard
              title="Better compoents"
              image_src="/playground_assets/05.svg"
            ></FeatureCard>
            <FeatureCard
              title="Well organized"
              image_src="/playground_assets/06.svg"
            ></FeatureCard>
          </div>
        </div>
        <div className="testimonials">
          <div className="container20">
            <div className="container21">
              <img
                alt="image"
                src="/playground_assets/quote-mark.svg"
                className="image14"
              />
              <h1 className="text44 headline2">
                Real Stories from Real Customers
              </h1>
              <span>Get inspired by these stories.</span>
              <div className="container22">
                <TestimonialsCard image_src="/playground_assets/logo-4.svg"></TestimonialsCard>
              </div>
            </div>
            <div className="container23">
              <div className="container24">
                <TestimonialsCard
                  src="/playground_assets/logo-1.svg"
                  text="I used Landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
                  text1="Jane Cooper"
                  text2="CEO, Airbnb"
                  image_src="/playground_assets/logo-1.svg"
                ></TestimonialsCard>
              </div>
              <div className="container25">
                <TestimonialsCard
                  text="Landify saved our time in designing my company page."
                  text1="Kristin Watson"
                  text2="Co-Founder, FedEx"
                  image_src="/playground_assets/logo-2.svg"
                ></TestimonialsCard>
              </div>
            </div>
          </div>
        </div>
        <div className="achievements">
          <div className="container26">
            <h2 className="text46">
              <span className="text47">
                Our 18 years of
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>achievements</span>
            </h2>
            <span className="text50">
              <span className="text51">
                With our super powers we have reached this
              </span>
            </span>
          </div>
          <div className="container27">
            <div className="container28">
              <StatsCard
                number="10,000+"
                image_src="/playground_assets/01.svg"
                description="Downloads per day"
              ></StatsCard>
              <StatsCard
                number="2 Milion"
                image_src="/playground_assets/04.svg"
                description="Users"
              ></StatsCard>
            </div>
            <div className="container29">
              <StatsCard number="500+" description="Clients"></StatsCard>
              <StatsCard
                number="140"
                image_src="/playground_assets/07.svg"
                description="Countries"
              ></StatsCard>
            </div>
          </div>
        </div>
        <div className="c-t-a">
          <div className="container30">
            <div className="container31">
              <h2 className="headline2 text52">
                <span className="text53">
                  Manage your projects from your mobile
                </span>
              </h2>
              <span className="text54 lead1">
                <span className="text55">
                  Download the app to manage your projects, keep track of the
                  progress and complete tasks without procastinating. Stay on
                  track and complete on time!
                </span>
              </span>
              <span className="text56 subtitle2">
                <span className="text57">Get the App</span>
              </span>
              <StoreBanner></StoreBanner>
            </div>
            <div className="container32">
              <img
                alt="image"
                src="/playground_assets/iPhoneX-1200w.png"
                image_src="/playground_assets/iPhoneX-1200w.png"
                className="image15"
              />
              <img
                alt="image"
                src="/playground_assets/iPhoneX-1200w.png"
                image_src="/playground_assets/iPhoneX-1200w.png"
                className="image16"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <footer className="container33">
            <img
              alt="image"
              src="/playground_assets/logotype-light.svg"
              className="image17"
            />
            <div className="container34">
              <span className="text58">About</span>
              <span className="text59">Features</span>
              <span className="text60">Pricing</span>
              <span className="text61">Careers</span>
              <span className="text62">Help</span>
              <span className="text63">Privacy Policy</span>
            </div>
            <div className="divider"></div>
            <div className="container35">
              <span className="text64 body2">
                Â© 2020 Landify UI Kit. All rights reserved
              </span>
              <div className="container36">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link4"
                >
                  <div className="container37">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="icon15"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link5"
                >
                  <div className="container38">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="icon17"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link6"
                >
                  <div className="container39">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="icon19"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link7"
                >
                  <div className="container40">
                    <svg viewBox="0 0 1024 1024" className="icon21">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .image {
            width: 100px;
            object-fit: cover;
          }
          .menu {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .text {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text01 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text02 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text03 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text04 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text05 {
            transition: 0.3s;
          }
          .text05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .icon {
            width: 24px;
            height: 24px;
          }
          .burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .menu1 {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 101;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .image01 {
            width: 100px;
            object-fit: cover;
          }
          .close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .icon05 {
            width: 24px;
            height: 24px;
          }
          .mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text06 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text06:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text07 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text07:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text08 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text08:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text09 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text09:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text10 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text10:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text11 {
            transition: 0.3s;
          }
          .text11:hover {
            color: var(--dl-color-turquoise-default);
          }
          .bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .container01 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .link {
            display: contents;
          }
          .container02 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon07 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .icon07:hover {
            fill: var(--dl-color-purple-default);
          }
          .link1 {
            display: contents;
          }
          .container03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon09 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .icon09:hover {
            fill: var(--dl-color-pink-default);
          }
          .link2 {
            display: contents;
          }
          .container04 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon11 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .icon11:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .link3 {
            display: contents;
          }
          .container05 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon13 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .icon13:hover {
            fill: var(--dl-color-orange-default);
          }
          .main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .blur-background {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            filter: blur(60px);
            height: 70vh;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-color: #f2f2f2;
          }
          .hero {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .heading {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .image02 {
            width: 320px;
            object-fit: cover;
          }
          .turquoise-cirble {
            top: 439px;
            left: auto;
            right: 430px;
            width: 170px;
            bottom: auto;
            filter: blur(60px);
            opacity: 0.6;
            position: absolute;
            object-fit: cover;
          }
          .purple-circle {
            top: -100px;
            left: auto;
            right: -26px;
            width: 400px;
            bottom: auto;
            filter: blur(60px);
            opacity: 0.4;
            position: absolute;
            object-fit: cover;
          }
          .left {
            top: 653px;
            left: 0px;
            right: auto;
            width: 420px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .right {
            top: 441px;
            left: auto;
            right: 0px;
            width: 612px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .belay {
            width: 100%;
            height: 746px;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container07 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .text18 {
            white-space: pre-wrap;
          }
          .text20 {
            max-width: 400px;
            margin-top: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .text21 {
            white-space: pre-wrap;
          }
          .image-large {
            width: 100%;
            height: 438px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/cover%20image.svg');
          }
          .image-small {
            width: 100%;
            height: 438px;
            display: none;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/cover%20image.svg');
          }
          .community {
            flex: 0 0 auto;
            width: 100%;
            height: 800px;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .container08 {
            width: 100%;
            height: 294px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: row;
            justify-content: flex-start;
            background-color: #2e868c;
          }
          .content {
            top: 0px;
            left: 0px;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 30px;
            padding-left: 48px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 30px;
            justify-content: flex-start;
          }
          .text22 {
            color: #ffffff;
            line-height: 54px;
          }
          .text23 {
            color: #f1f2f6;
            max-width: 400px;
          }
          .text24 {
            white-space: pre-wrap;
          }
          .phone {
            top: 0px;
            left: 0px;
            width: 50%;
            height: 100%;
            display: flex;
            padding: 40px 48px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .image03 {
            width: 320px;
            object-fit: cover;
          }
          .user-info {
            flex: 0 0 auto;
            width: 100%;
            height: 668px;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container09 {
            flex: 0 0 auto;
            width: 540px;
            height: 540px;
            display: flex;
            overflow: hidden;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-purple-100);
          }
          .image04 {
            height: 441px;
            align-self: center;
            margin-top: 100px;
            object-fit: cover;
          }
          .container10 {
            flex: 1;
            margin: var(--dl-space-space-doubleunit);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text26 {
            max-width: 400px;
            margin-top: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .text27 {
            white-space: pre-wrap;
          }
          .app-feature {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text28 {
            color: #18191F;
            line-height: 54px;
          }
          .container11 {
            width: 100%;
            height: 802px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: row;
            justify-content: flex-start;
          }
          .list {
            height: 647px;
            display: flex;
            padding: 0px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .line-1 {
            display: flex;
            padding: 0px;
            column-gap: 40px;
            margin-top: 0px;
            align-items: center;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 48px;
            flex-direction: row;
            justify-content: space-between;
          }
          .image05 {
            width: 72px;
            object-fit: cover;
          }
          .container12 {
            width: 515px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image06 {
            width: 50px;
            display: none;
            align-self: flex-start;
            object-fit: cover;
            padding-right: 10px;
          }
          .text29 {
            color: #18191F;
            line-height: 54px;
          }
          .text30 {
            color: #18191F;
            max-width: 100%;
            align-self: flex-start;
          }
          .text31 {
            white-space: pre-wrap;
          }
          .line-2 {
            display: flex;
            padding: 0px;
            column-gap: 40px;
            align-items: flex-start;
            margin-bottom: 48px;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image07 {
            width: 72px;
            object-fit: cover;
          }
          .container14 {
            width: 515px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container15 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image08 {
            width: 72px;
            display: none;
            object-fit: cover;
          }
          .text32 {
            color: #18191F;
            width: 100%;
            line-height: 54px;
          }
          .text33 {
            color: #18191F;
            max-width: 100%;
            align-self: flex-start;
          }
          .text34 {
            white-space: pre-wrap;
          }
          .line-3 {
            display: flex;
            padding: 0px;
            column-gap: 40px;
            align-items: flex-start;
            margin-bottom: 48px;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image09 {
            width: 72px;
            object-fit: cover;
          }
          .container16 {
            width: 515px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container17 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .image10 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .text35 {
            color: #18191F;
            width: 100%;
            line-height: 54px;
          }
          .text36 {
            color: #18191F;
            max-width: 100%;
            align-self: flex-start;
          }
          .text37 {
            white-space: pre-wrap;
          }
          .line-4 {
            display: flex;
            padding: 0px;
            column-gap: 40px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image11 {
            width: 72px;
            object-fit: cover;
          }
          .container18 {
            width: 515px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container19 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image12 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .text38 {
            color: #18191F;
            width: 100%;
            line-height: 54px;
          }
          .text39 {
            color: #18191F;
            max-width: 100%;
            align-self: flex-start;
          }
          .text40 {
            white-space: pre-wrap;
          }
          .phone1 {
            top: 0px;
            left: 0px;
            width: 50%;
            height: 100%;
            display: flex;
            padding: 40px 48px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .image13 {
            width: 448px;
            height: 912px;
            object-fit: cover;
          }
          .features {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            border-radius: 16px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text42 {
            max-width: 500px;
            text-align: center;
          }
          .text43 {
            white-space: pre-wrap;
          }
          .features1 {
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonials {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
            background-color: var(--dl-color-turquoise-100);
          }
          .container20 {
            display: flex;
            flex-wrap: wrap;
            max-width: 1100px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container21 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .image14 {
            top: -22px;
            left: -65px;
            right: auto;
            width: 100px;
            bottom: auto;
            z-index: 10;
            position: absolute;
            object-fit: cover;
          }
          .text44 {
            z-index: 100;
            max-width: 500px;
          }
          .container22 {
            flex: 0 0 auto;
            width: 350px;
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container23 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .container24 {
            width: 350px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .container25 {
            width: 300px;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .achievements {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .container26 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text47 {
            white-space: pre-wrap;
          }
          .text51 {
            white-space: pre-wrap;
          }
          .container27 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container28 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container29 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .c-t-a {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #84CBD0;
          }
          .container30 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .container31 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text53 {
            white-space: pre-wrap;
          }
          .text54 {
            max-width: 500px;
          }
          .text55 {
            white-space: pre-wrap;
          }
          .text56 {
            max-width: 400px;
            margin-top: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text57 {
            white-space: pre-wrap;
          }
          .container32 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image15 {
            top: -100px;
            left: auto;
            right: var(--dl-space-space-doubleunit);
            width: 232px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .image16 {
            top: auto;
            left: var(--dl-space-space-doubleunit);
            right: auto;
            width: 232px;
            bottom: -100px;
            position: absolute;
            object-fit: cover;
          }
          .footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .container33 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .image17 {
            object-fit: cover;
          }
          .container34 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .text58 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .text58:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text59 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .text59:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text60 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .text60:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text61 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .text61:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text62 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .text62:hover {
            color: var(--dl-color-turquoise-default);
          }
          .text63 {
            transition: 0.3s;
            white-space: nowrap;
          }
          .text63:hover {
            color: var(--dl-color-turquoise-default);
          }
          .divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: var(--dl-color-gray-white);
          }
          .container35 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .text64 {
            color: var(--dl-color-gray-300);
            margin-top: var(--dl-space-space-unit);
          }
          .container36 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .link4 {
            display: contents;
          }
          .container37 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon15 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .icon15:hover {
            fill: var(--dl-color-purple-default);
          }
          .link5 {
            display: contents;
          }
          .container38 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon17 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .icon17:hover {
            fill: var(--dl-color-pink-default);
          }
          .link6 {
            display: contents;
          }
          .container39 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon19 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .icon19:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .link7 {
            display: contents;
          }
          .container40 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon21 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .icon21:hover {
            fill: var(--dl-color-orange-default);
          }
          @media (max-width: 991px) {
            .hero {
              height: auto;
              flex-direction: column;
            }
            .container06 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .heading {
              text-align: center;
            }
            .container07 {
              align-items: flex-start;
              flex-direction: column;
            }
            .container08 {
              align-self: flex-end;
              align-items: flex-start;
              flex-direction: row;
              justify-content: flex-start;
            }
            .content {
              margin: 0px;
            }
            .phone {
              width: 258px;
              height: 294px;
              margin-left: 0px;
              margin-right: 0px;
            }
            .image03 {
              align-self: flex-start;
            }
            .user-info {
              align-self: flex-start;
              align-items: flex-start;
              margin-left: 0px;
              flex-direction: row;
              justify-content: flex-end;
            }
            .container10 {
              width: 100%;
              margin-top: 0px;
              margin-left: 40px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .app-feature {
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .container11 {
              width: 990px;
              align-self: center;
              margin-top: 40px;
              align-items: flex-start;
              flex-direction: row;
              justify-content: flex-start;
            }
            .list {
              width: 50%;
              height: 719px;
              align-items: flex-start;
              justify-content: space-between;
            }
            .line-1 {
              width: 100%;
              margin: 0px;
              column-gap: 20px;
              align-items: flex-start;
            }
            .image05 {
              margin-left: 32px;
            }
            .line-2 {
              width: 100%;
              column-gap: 20px;
              align-items: flex-start;
              margin-bottom: 0px;
              justify-content: space-between;
            }
            .image07 {
              margin-left: 32px;
            }
            .line-3 {
              width: 100%;
              column-gap: 20px;
              align-items: flex-start;
              margin-bottom: 0px;
              justify-content: space-between;
            }
            .image09 {
              margin-left: 32px;
            }
            .line-4 {
              width: 100%;
              column-gap: 20px;
            }
            .image11 {
              margin-left: 32px;
            }
            .phone1 {
              width: auto;
              height: 863px;
              margin: 0px;
              padding: 0px;
              align-self: center;
              flex-direction: row;
            }
            .image13 {
              height: 888px;
              align-self: flex-start;
            }
            .container20 {
              flex-direction: column;
            }
            .container22 {
              align-self: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .container23 {
              align-items: center;
              margin-left: 0px;
            }
            .container25 {
              width: 350px;
            }
            .achievements {
              flex-direction: column;
            }
            .container27 {
              margin-top: var(--dl-space-space-doubleunit);
            }
            .container32 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .menu {
              display: none;
            }
            .burger-menu {
              display: block;
            }
            .heading {
              font-size: 50px;
              text-align: center;
            }
            .text17 {
              font-size: 40px;
            }
            .community {
              height: 619px;
            }
            .content {
              padding-left: 15px;
              padding-right: 0px;
            }
            .user-info {
              height: 944px;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .container09 {
              width: 100%;
              height: 544px;
              align-self: center;
              align-items: center;
              justify-content: flex-start;
            }
            .image04 {
              height: 445px;
            }
            .container10 {
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .container11 {
              width: 767px;
            }
            .list {
              width: 476px;
            }
            .text41 {
              font-size: 40px;
            }
            .container21 {
              align-items: center;
            }
            .image14 {
              top: -2px;
              left: 21px;
              right: auto;
              width: 50px;
              bottom: auto;
            }
            .text44 {
              font-size: 40px;
              text-align: center;
            }
            .text46 {
              font-size: 40px;
            }
            .text52 {
              font-size: 40px;
            }
            .container34 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .container35 {
              flex-direction: column;
            }
            .text64 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .bot {
              width: 100%;
            }
            .belay {
              height: 868px;
            }
            .image-large {
              display: none;
            }
            .image-small {
              width: 100%;
              height: 285px;
              display: flex;
              background-size: cover;
              background-image: url('/playground_assets/cover%20image%20small.svg');
            }
            .community {
              width: 100%;
              height: 1029px;
              align-self: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .container08 {
              width: 540px;
              height: 961px;
              display: flex;
              overflow: hidden;
              align-self: center;
              align-items: center;
              flex-direction: column;
              background-color: transparent;
            }
            .content {
              width: 100%;
              height: 344px;
              padding-left: 0px;
              background-color: #2e868c;
            }
            .text22 {
              align-self: flex-start;
              margin-left: 85px;
            }
            .text23 {
              margin-top: 0px;
              margin-left: 85px;
              margin-right: 85px;
              margin-bottom: 0px;
            }
            .phone {
              width: 478px;
              height: 583px;
              margin-top: 20px;
              align-items: center;
              padding-top: 0px;
              border-color: #ffffff;
              border-width: 6px;
              padding-bottom: 0px;
              justify-content: center;
              background-color: #ffffff;
            }
            .image03 {
              height: 600px;
              align-self: center;
              margin-top: 40px;
            }
            .user-info {
              height: 927px;
              align-items: center;
              justify-content: flex-start;
            }
            .container09 {
              width: 540%;
              align-items: flex-start;
            }
            .image04 {
              height: 444px;
              margin-left: 20px;
            }
            .container10 {
              height: 300px;
              margin-left: 0px;
            }
            .app-feature {
              width: 100%;
              height: 1564px;
              align-self: center;
              justify-content: flex-start;
            }
            .text28 {
              align-self: flex-start;
              margin-left: 0px;
            }
            .container11 {
              width: 100%;
              height: 1511px;
              display: flex;
              overflow: hidden;
              margin-top: 10px;
              align-items: stretch;
              flex-direction: column;
              justify-content: flex-start;
              background-color: transparent;
            }
            .list {
              width: 100%;
              height: 794px;
            }
            .line-1 {
              margin: 0px;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            .image05 {
              display: none;
            }
            .container12 {
              width: 100%;
            }
            .image06 {
              display: flex;
            }
            .text29 {
              width: 100%;
              align-self: flex-start;
            }
            .line-2 {
              margin: 0px;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            .image07 {
              display: none;
              align-self: center;
            }
            .container14 {
              width: 100%;
            }
            .image08 {
              width: 50px;
              display: flex;
              align-self: flex-start;
              padding-right: 10px;
            }
            .text32 {
              align-self: flex-start;
            }
            .line-3 {
              margin: 0px;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            .image09 {
              display: none;
              align-self: center;
            }
            .container16 {
              width: 100%;
            }
            .container17 {
              flex-direction: row;
            }
            .image10 {
              width: 50px;
              display: flex;
              align-self: flex-start;
              padding-right: 10px;
            }
            .text35 {
              align-self: flex-start;
            }
            .line-4 {
              margin: 0px;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            .image11 {
              display: none;
              align-self: center;
            }
            .container18 {
              width: 100%;
            }
            .image12 {
              width: 50px;
              padding-right: 10px;
            }
            .text38 {
              align-self: flex-start;
            }
            .phone1 {
              width: 540px;
              height: 759px;
              padding: 0px;
              align-self: center;
              margin-top: 0px;
              align-items: center;
              border-color: #ffffff;
              border-width: 6px;
              justify-content: center;
            }
            .image13 {
              width: 333px;
              height: 608px;
              align-self: center;
            }
            .text41 {
              text-align: center;
            }
            .text42 {
              text-align: center;
            }
            .container26 {
              align-items: center;
            }
            .text46 {
              text-align: center;
            }
            .text50 {
              text-align: center;
            }
            .container28 {
              flex-direction: column;
            }
            .container29 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
