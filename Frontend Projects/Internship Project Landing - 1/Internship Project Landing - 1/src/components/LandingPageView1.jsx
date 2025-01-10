import React, { useEffect, useState } from 'react';
import { Edit2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const LandingPageView1 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";

  useEffect(() => {
    const fetchLandingPageData = async () => {
      // Mocked response; replace with actual API call if needed
      const response = {
        artistPage: {
          artistName: "Vishal Mishra",
          stageTitles:
            "5-Star Performer | Chart-Topping Artist | Voice Artist",
          artistBio:
            "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          artistPhoto:
            "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          gradientStart: "#6D83F2",
          gradientEnd: "#C57AFF",
        },
        performances: [
          {
            performanceId: "perf1",
            eventTitle: "Live at Mumbai Arena",
            description: "An acoustic performance for music lovers.",
            ticketPrice: 1499,
            durationMinutes: 120,
            platform: "Stage",
            performanceType: "Team",
          },
          {
            performanceId: "perf2",
            eventTitle: "Melody Night",
            description: "A night of soulful tunes.",
            ticketPrice: 699,
            durationMinutes: 30,
            platform: "Party",
            performanceType: "Solo",
          },
          {
            performanceId: "perf3",
            eventTitle: "Symphony Session",
            description: "A virtual symphony session with fans.",
            ticketPrice: 499,
            durationMinutes: 45,
            platform: "Theater",
            performanceType: "Solo",
          },
        ],
        merchandise: [
          {
            merchId: "merc1",
            merchName: "Signed TShirt + Signed Cup + Signed Vinyl",
            merchDescription: "Limited edition signed merchandise.",
            price: 399,
            merchType: "Exclusive",
            imageURL:
              "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid",
          },
        ],
        songSales: [
          {
            songId: "song1",
            title: "Melody of Dreams",
            priceType: "Variable",
            description:
              "An enchanting melody inspired by the beauty of nature.",
            imageURL:
              "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584",
          },
          {
            songId: "song2",
            title: "Echoes of the Heart",
            priceType: "Set",
            price: 100,
            description:
              "A heartfelt ballad that resonates deeply with listeners.",
            imageURL:
              "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg",
          },
          {
            songId: "song3",
            title: "Rhythm of the Night",
            priceType: "Set",
            price: 200,
            description:
              "A vibrant and energetic track perfect for dancing.",
            imageURL:
              "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg",
          },
          {
            songId: "song4",
            title: "Journey Within",
            priceType: "Set",
            price: 50,
            description:
              "A soulful piece reflecting the artist's inner journey.",
            imageURL:
              "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg",
          },
        ],
        musicVideos: [
          {
            videoId: "vid1",
            title: "Melodic Memories",
            description: "A visual treat of my recent performance.",
            platform: "YouTube",
            redirectURL: "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            imageURL:
              "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg",
          },
          {
            videoId: "vid2",
            title: "Melodic Memories",
            description: "A visual treat of my recent performance.",
            platform: "YouTube",
            redirectURL: "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            imageURL:
              "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg",
          },
        ],
        fanMessages: {
          title: "Message Vishal Mishra",
          description: "Send me your thoughts or questions.",
          promisedReplyTime: "3",
        },
        supportPage: {
          title: "Show Your Love",
        },
        musicPlatformLinks: [
          {
            musicPlatform: "JioSaavan",
            url: "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            icon:
              "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo",
          },
          {
            musicPlatform: "Spotify",
            url: "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            icon:
              "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
          },
        ],
      };

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);
    };
    fetchLandingPageData();
  }, [username]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector("#navbar");
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };

  if (!landingPageData) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">Loading Landing Page...</div>
        </CardContent>
      </Card>
    );
  }

  const {
    artistPage,
    performances,
    merchandise,
    songSales,
    musicVideos,
    fanMessages,
    supportPage,
    musicPlatformLinks,
  } = landingPageData;

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      style={{
        background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd}), url('https://via.placeholder.com/1920x1080')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navbar Section */}
      <nav
        id="navbar"
        className="fixed top-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-lg transition-all duration-300"
      >
        <Card className="rounded-none shadow-none">
          <CardContent className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl text-indigo-600">@{username}</h2>
              <Tabs>
                <TabsList className="hidden md:flex space-x-2">
                  {[
                    { label: "Performances", value: "performances" },
                    { label: "Videos", value: "videos" },
                    { label: "Songs Sale", value: "songsSale" },
                    { label: "Merchandise", value: "merchandise" },
                    { label: "Messages", value: "messages" },
                    { label: "Support", value: "support" },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      onClick={() => scrollToSection(tab.value)}
                      className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                {/* Implement a mobile menu if needed */}
              </div>
            </div>
          </CardContent>
        </Card>
      </nav>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 pt-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div
            className="lg:col-span-4 lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] overflow-auto"
            style={{
              overflow: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <Avatar className="w-32 h-32">
                      <AvatarImage
                        src={profileImage || "/default-avatar.jpg"}
                        alt="Profile"
                        className="border-4 border-indigo-600"
                      />
                      <AvatarFallback>{username}</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold mt-4 text-indigo-600">
                      {artistPage.artistName}
                    </h2>
                    <Badge
                      variant="secondary"
                      className="mt-2 bg-indigo-100 text-indigo-700"
                    >
                      {artistPage.stageTitles}
                    </Badge>
                  </div>

                  {/* Social Links Section */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4 text-indigo-600">
                      Connect with me on:
                    </h3>

                    <div className="flex flex-col gap-4">
                      {musicPlatformLinks.map((link) => (
                        <motion.button
                          key={link.musicPlatform + link.url}
                          className="flex items-center p-3 border border-gray-300 rounded-full shadow-md hover:bg-indigo-100 transition-colors duration-200"
                          onClick={() =>
                            link.url && window.open(link.url, "_blank")
                          }
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 mr-4">
                            {link.icon ? (
                              <img
                                src={link.icon}
                                alt={`${link.musicPlatform} icon`}
                                className="w-10 h-10 object-contain rounded-full"
                              />
                            ) : null}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {link.musicPlatform || " "}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-indigo-600">About</CardTitle>
                  <CardDescription className="text-gray-700">
                    {artistPage.artistBio}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Music Videos Section */}
            <div id="videos">
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-indigo-600">
                      Music Videos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {musicVideos.map((video) => (
                        <motion.div
                          key={video.videoId}
                          className="overflow-hidden cursor-pointer rounded-lg shadow-md bg-white"
                          onClick={() =>
                            window.open(video.redirectURL, "_blank")
                          }
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="relative">
                            {/* Image with a 16:9 aspect ratio */}
                            <div
                              className="w-full"
                              style={{ paddingTop: "56.25%" }}
                            >
                              <img
                                src={video.imageURL}
                                alt={video.title}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                              />
                            </div>

                            {/* Text content below the image */}
                            <div className="p-4 bg-white/90 backdrop-blur-sm flex justify-between items-center">
                              <span className="font-medium text-indigo-700">
                                {video.title}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-indigo-600 hover:text-indigo-800"
                              >
                                <Edit2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Scrollable Sections */}
            <ScrollArea className="">
              {/* Performances Section */}
              <div id="performances">
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
                    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                      Performances
                    </h2>

                    {performances.map((perf) => (
                      <Card
                        key={perf.performanceId}
                        className="mb-4 bg-white bg-opacity-80 backdrop-blur-md hover:bg-opacity-90 transition-colors duration-200"
                      >
                        <CardHeader>
                          <CardTitle className="text-indigo-700">
                            {perf.eventTitle}
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {perf.description}
                            <br />
                            <strong>Duration:</strong> {perf.durationMinutes} mins
                            <br />
                            <strong>Location:</strong> {perf.platform}
                            <br />
                            <strong>Price:</strong> ${perf.ticketPrice}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button
                            className="mt-2 bg-indigo-600 hover:bg-indigo-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Book Now
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Songs Sales Section */}
              <div id="songsSale">
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
                    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                      Songs for Sale
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {songSales.map((song) => (
                        <motion.div
                          key={song.songId}
                          className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Image Section */}
                          <div className="h-48">
                            <img
                              src={song.imageURL}
                              alt={song.title}
                              className="object-cover w-full h-full"
                            />
                          </div>

                          {/* Content Section */}
                          <div className="p-4 flex-grow flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-bold mb-2 text-indigo-700">
                                {song.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {song.description}
                                <br />
                                <strong>Pricing:</strong> {song.priceType}
                                {song.price && ` - $${song.price}`}
                              </p>
                            </div>
                            <button
                              className="mt-4 w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              View Songs
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Merchandise Section */}
              <div id="merchandise">
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
                    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                      Merchandise
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {merchandise.map((merc) => (
                        <motion.div
                          key={merc.merchId}
                          className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Image Section */}
                          <div className="h-48">
                            <img
                              src={merc.imageURL}
                              alt={merc.merchName}
                              className="object-cover w-full h-full"
                            />
                          </div>

                          {/* Content Section */}
                          <div className="p-4 flex-grow flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-bold mb-2 text-indigo-700">
                                {merc.merchName}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {merc.merchDescription}
                                <br />
                                <strong>Price:</strong> ${merc.price}
                                <br />
                                <strong>Type:</strong> {merc.merchType}
                              </p>
                            </div>
                            <button
                              className="mt-4 w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              View Bundle
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Messages Section */}
              <div id="messages">
                {fanMessages && (
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
                      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                        Fan Messages
                      </h2>

                      <Card className="mb-4 bg-white bg-opacity-80 backdrop-blur-md hover:bg-opacity-90 transition-colors duration-200">
                        <CardHeader>
                          <CardTitle className="text-indigo-700">
                            Message Me
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {fanMessages.title}
                            <br />
                            {fanMessages.description}
                            <br />
                            <strong>Promised Reply Time:</strong>{" "}
                            {fanMessages.promisedReplyTime} hours
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button
                            className="bg-indigo-600 hover:bg-indigo-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Send Message
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Support Section */}
              <div id="support">
                {supportPage && (
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
                      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
                        Support Me
                      </h2>

                      <Card className="mb-4 bg-white bg-opacity-80 backdrop-blur-md hover:bg-opacity-90 transition-colors duration-200">
                        <CardHeader>
                          <CardTitle className="text-indigo-700">
                            Support
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {supportPage.title}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button
                            className="bg-indigo-600 hover:bg-indigo-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Support
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPageView1;
