import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import ReactTypingEffect from 'react-typing-effect';


const sectionVariants = {
  hidden: { opacity: 0.8, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};



function Section({ children }) {
  return (
    <motion.div
      initial="hidden" // Start with the hidden state
      whileInView="visible" // Animate to 'visible' when in view
      viewport={{ once: false, amount: 0.1 }} // Trigger animation once when 50% in view
      variants={sectionVariants}
      style={{}}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }
  return (
    <div>
      <Section>
        <section className='banner-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='text-center'> <span className='me-2'>Decode your food with</span>
                  <ReactTypingEffect
                    text={["Chuki's Instant AI Analysis", "Health Score Ratings", "Smart Ingredient Checks"]}
                    cursorRenderer={cursor => <h1>{cursor}</h1>}
                    displayTextRenderer={(text, i) => {
                      return (
                        <h1 className='text-center'>
                          {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                              <span
                                key={key}
                                style={i % 2 === 0 ? { color: '#FF8000' } : { color: '#FF8000' }}
                              >{char}</span>
                            );
                          })}
                        </h1>
                      );
                    }}
                    speed={100} // Typing speed (lower value = faster)
                    eraseSpeed={30} // Erase speed
                    typingDelay={600} // Delay before typing starts
                    eraseDelay={1500} // Delay before erasing starts
                  />
                </h1>
                <p>India's first AI food scanner that instantly rates products, reveals hidden ingredients, and helps your family make healthier choices with just one scan</p>
                <button type='button' className='btn-default'>Let’s get started
                  <div className='icon'>
                    <img src='arrow.svg' alt='Logo' />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Section>
      <Section>
        <section className='section-images'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-12'>
                {/* <img src='image.png' alt='Logo' className='justify-content-center d-flex mx-auto img-fluid' /> */}
                <video width="100%"
                  height="600"
                  autoPlay
                  muted
                  // loop
                  playsInline
                >
                  <source src="video-3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className='btn-download'>
                <div className='icons'>
                  <div className='img-part'>
                    <img src='android.svg' alt='Logo' />
                  </div>
                  <div className='img-part'>
                    <img src='playstore.svg' alt='Logo' />
                  </div>
                </div>
                <div className='text'>Download Now</div>
              </div>
            </div>
          </div>
        </section>

      </Section>
      <Section>
        <section id='feature' className='feature-section'>
          <div className="container">
            <div className="row justify-content-center">
              <div className='section-title'>Featured In</div>
              <div className="col-md-12 ">
                <div className='logo-lists'>
                  <div className='logo-image'>
                    <img src='logo1.png' alt='Logo' />
                  </div>
                  <div className='logo-image'>
                    <img src='logo2.png' alt='Logo' />
                  </div>
                  <div className='logo-image'>
                    <img src='logo3.png' alt='Logo' />
                  </div>
                  <div className='logo-image'>
                    <img src='logo4.png' alt='Logo' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Section>
      <section className='tab-feature-section'>
        <div className='container'>
          <Section>
            <div className='row'>
              <div className='col-md-12'>
                <div className='tab-feature'>
                  <div className='tab-feature-title'>Chuki - Your Food Scan Companion!</div>
                  <p>Chuki combines technology and convenience to help you make smarter, healthier food choices every day. Download now and take control of what’s on your plate!</p>
                </div>
                <Tabs defaultActiveKey="scan" id="custom-tab-example" className="custom-tabs mb-3">
                  <Tab
                    eventKey="scan"
                    title={
                      <span className="tab-title">
                        <img
                          src="scan.svg"
                          alt="Home Icon"
                          className="tab-icon"
                        />
                        Scan Barcode
                      </span>
                    }
                  >
                    <div className='tab-content'>
                      <div className='row align-items-center'>
                        <div className='col-md-6'>
                          <div className='image-part'>
                            <img src='Barcode.png' alt='Scan' className='img-fluid' />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='tab-content-text'>
                            <h5>Scan Anything, Anywhere</h5>
                            <p>Quickly scan food items, ingredients, or meals using Chuki's smart scanner. Instantly get insights into nutritional value, ingredients, and more!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="scan-i"
                    title={
                      <span className="tab-title">
                        <img
                          src="ai.svg"
                          alt="Home Icon"
                          className="tab-icon"
                        />
                        Scan ingredients
                      </span>
                    }
                  >
                    <div className='tab-content'>
                      <div className='row align-items-center'>
                        <div className='col-md-6'>
                          <div className='image-part'>
                            <img src='Ingredients.png' alt='Scan' className='img-fluid' />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='tab-content-text'>
                            <h5>Scan Anything, Anywhere</h5>
                            <p>Quickly scan food items, ingredients, or meals using Chuki's smart scanner. Instantly get insights into nutritional value, ingredients, and more!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="score"
                    title={
                      <span className="tab-title">
                        <img
                          src="score.svg"
                          alt="Profile Icon"
                          className="tab-icon"
                        />
                        Score
                      </span>
                    }
                  >
                    <div className='tab-content'>
                      <div className='row align-items-center'>
                        <div className='col-md-6'>
                          <div className='image-part'>
                            <img src='Score.png' alt='Scan' className='img-fluid'/>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='tab-content-text'>
                            <h5>Scan Anything, Anywhere</h5>
                            <p>Scan the barcode of any food product to get instant information about its ingredients, nutritional</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="compare"
                    title={
                      <span className="tab-title">
                        <img
                          src="compare.svg"
                          alt="Contact Icon"
                          className="tab-icon"
                        />
                        Compare
                      </span>
                    }
                  >
                    <div className='tab-content'>
                      <div className='row align-items-center'>
                        <div className='col-md-6'>
                          <div className='image-part'>
                            <img src='Compare1.png' alt='Scan' className='img-fluid'/>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='tab-content-text'>
                            <h5>Scan Anything, Anywhere</h5>
                            <p>Scan the barcode of any food product to get instant information about its ingredients, nutritional</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="recomm"
                    title={
                      <span className="tab-title">
                        <img
                          src="recomm.svg"
                          alt="Contact Icon"
                          className="tab-icon"
                        />
                        Recommendations
                      </span>
                    }
                  >
                    <div className='tab-content'>
                      <div className='row align-items-center'>
                        <div className='col-md-6'>
                          <div className='image-part'>
                            <img src='Recommendation.png' alt='Scan' className='img-fluid' />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='tab-content-text'>
                            <h5>Scan Anything, Anywhere</h5>
                            <p>Scan the barcode of any food product to get instant information about its ingredients, nutritional</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </Section>
        </div>
      </section>

      <Section>
        <section className='other-feature-part'>
          <div className='container'>
            <div className='title-part'>
              <h5>Beyond Scanning: <br />
                Chuki's Smart Food Features</h5>
              <p>Smarter food choices with lessons, podcasts, guides, and community insights to elevate your eating habits.</p>
            </div>
            <div className='row justify-content-between'>

              <div className='col-md-3'>
                <div className='feature-part'>
                  <div className='feature-icon'>
                    <img src='lesson.svg' alt='Podcast Icon' />
                  </div>
                  <div className='text-part'>
                    <h5>Interactive Lessons</h5>
                    <p>Master nutrition and healthy eating habits with easy-to-follow lessons tailored to your goals.</p>
                  </div>
                </div>
                <div className='feature-part'>
                  <div className='feature-icon'>
                    <img src='shorts.svg' alt='Podcast Icon' />
                  </div>
                  <div className='text-part'>
                    <h5>Shorts</h5>
                    <p>ChukiApp's Shorts feature delivers quick, bite-sized food tips and nutritional facts, helping you make smarter food choices on the go.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='video-part'>
                  <video width="100%"
                    height="500"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="video-5.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='feature-part'>
                  <div className='feature-icon'>
                    <img src='podcasts.svg' alt='Podcast Icon' />
                  </div>
                  <div className='text-part'>
                    <h5>Podcasts on the Go</h5>
                    <p>Stay informed with expert-led podcasts covering diet tips, food science, and wellness trends.</p>
                  </div>
                </div>
                <div className='feature-part'>
                  <div className='feature-icon'>
                    <img src='quiz.svg' alt='Podcast Icon' />
                  </div>
                  <div className='text-part'>
                    <h5>Interactive Quiz</h5>
                    <p>Stay informed with expert-led podcasts covering diet tips, food science, and wellness trends.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Section>
      <Section>
        <section className='features-new-section'>
          <div className='container'>
            <div className='row justify-content-between'>
              <div className='col-md-7'>
                <div className='title-part'>
                  <h5>Your Ultimate Guide to Healthy Eating and Smart Food Choices</h5>
                  <p>This heading gives a broad overview without directly listing the features. Let me know if it aligns with your needs!</p>
                </div>
                <div className='features-lists'>
                  <div className='feature-part'>
                    <div className='feature-icon'>
                      <img src='fastfood.svg' alt='Podcast Icon' />
                    </div>
                    <div className='text-part'>
                      <h5>Fast Food Guide</h5>
                      <p>Navigate fast food menus effortlessly with insights to help you make healthier choices.</p>
                    </div>
                  </div>
                  <div className='feature-part'>
                    <div className='feature-icon'>
                      <img src='diet.svg' alt='Podcast Icon' />
                    </div>
                    <div className='text-part'>
                      <h5>Diet Compatibility Check</h5>
                      <p>Ensure food items align with your dietary preferences and restrictions with just a tap.</p>
                    </div>
                  </div>
                  <div className='feature-part'>
                    <div className='feature-icon'>
                      <img src='lists.svg' alt='Podcast Icon' />
                    </div>
                    <div className='text-part'>
                      <h5>Shopping List Integration</h5>
                      <p>Build smarter shopping lists directly from your scans and personalized recommendations.</p>
                    </div>
                  </div>
                  <div className='feature-part'>
                    <div className='feature-icon'>
                      <img src='community.svg' alt='Podcast Icon' />
                    </div>
                    <div className='text-part'>
                      <h5>Community Insights</h5>
                      <p>Join a community of users sharing reviews, tips, and real-world food insights to guide your</p>
                    </div>
                  </div>
                </div>
                <div className='btn-download'>
                  <div className='icons'>
                    <a href='https://apps.apple.com/us/app/chuki-ai-food-scanner-app/id6503965575' className='img-part' target='_blank'>
                      <img src='android.svg' alt='Logo' />
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=com.chuki.app.chuki&hl=en_US' className='img-part' target='_blank'>
                      <img src='playstore.svg' alt='Logo' />
                    </a>
                  </div>
                  <div className='text'>Download Now</div>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='video-part'>
                  <video width="100%"
                    height="500"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="video-4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Section>
      <Section>
        <section id='influencers' className='influencer-section'>
          <div className='container-fluid'>
            <div className='row'>
              <h6 className='section-title'>Join Our Nutritionist Team</h6>
              <div className='influencers-lists'>
                <Marquee gradient={true} gradientWidth={400} pauseOnHover={true}>
                  <div className='list-item'>
                    <div className='card-container'>
                      <div className="card">
                        <div className="card-face card-front">
                          <div className='influencer-image'>
                            <img src='Sonia.jpg' alt='Influencer Image' />
                          </div>
                          <div className='text-part'>
                            <div className='author'>
                              <div className='name'>Sonia Velarsan</div>
                              <div className='des'>Registered Dietitian</div>
                            </div>
                            <div className='arrow'>
                              <img src='arrow-2.svg' alt='' />
                            </div>
                          </div>
                        </div>
                        <div className="card-face card-back">
                          <div className="back-content">
                            <h3>About Jenny</h3>
                            <p>Jenny is a renowned Keto Diet Specialist with over 10 years of experience.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='list-item'>
                    <div className='card-container'>
                      <div className="card">
                        <div className="card-face card-front">
                          <div className='influencer-image'>
                            <img src='preeti.jpg' alt='Influencer Image' />
                          </div>
                          <div className='text-part'>
                            <div className='author'>
                              <div className='name'>Preeti Gupta</div>
                              <div className='des'>Registered Dietitian</div>
                            </div>
                            <div className='arrow'>
                              <img src='arrow-2.svg' alt='' />
                            </div>
                          </div>
                        </div>
                        <div className="card-face card-back">
                          <div className="back-content">
                            <h3>About Jenny</h3>
                            <p>Jenny is a renowned Keto Diet Specialist with over 10 years of experience.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='list-item'>
                    <div className='card-container'>
                      <div className="card">
                        <div className="card-face card-front">
                          <div className='influencer-image'>
                            <img src='Nutri.jpg' alt='Influencer Image' />
                          </div>
                          <div className='text-part'>
                            <div className='author'>
                              <div className='name'>Ankita Choudhary</div>
                              <div className='des'>Registered Dietitian</div>
                            </div>
                            <div className='arrow'>
                              <img src='arrow-2.svg' alt='' />
                            </div>
                          </div>
                        </div>
                        <div className="card-face card-back">
                          <div className="back-content">
                            <h3>About Jenny</h3>
                            <p>Jenny is a renowned Keto Diet Specialist with over 10 years of experience.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='list-item'>
                    <div className='card-container'>
                      <div className="card">
                        <div className="card-face card-front">
                          <div className='influencer-image'>
                            <img src='pRE.jpg' alt='Influencer Image' />
                          </div>
                          <div className='text-part'>
                            <div className='author'>
                              <div className='name'>Netra Khanvilkar</div>
                              <div className='des'>Registered Dietitian</div>
                            </div>
                            <div className='arrow'>
                              <img src='arrow-2.svg' alt='' />
                            </div>
                          </div>
                        </div>
                        <div className="card-face card-back">
                          <div className="back-content">
                            <h3>About Jenny</h3>
                            <p>Jenny is a renowned Keto Diet Specialist with over 10 years of experience.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='list-item'>
                    <div className='card-container'>
                      <div className="card">
                        <div className="card-face card-front">
                          <div className='influencer-image'>
                            <img src='deepika_nutrtionist.jpg' alt='Influencer Image' />
                          </div>
                          <div className='text-part'>
                            <div className='author'>
                              <div className='name'>Deepika M</div>
                              <div className='des'>Licensed Nutritionist</div>
                            </div>
                            <div className='arrow'>
                              <img src='arrow-2.svg' alt='' />
                            </div>
                          </div>
                        </div>
                        <div className="card-face card-back">
                          <div className="back-content">
                            <h3>About Jenny</h3>
                            <p>Jenny is a renowned Keto Diet Specialist with over 10 years of experience.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='list-item'>
                    <div className='card-container'>
                      <div className="card">
                        <div className="card-face card-front">
                          <div className='influencer-image'>
                            <img src='ishwaran.jpeg' alt='Influencer Image' />
                          </div>
                          <div className='text-part'>
                            <div className='author'>
                              <div className='name'>Ishwaran Khullar</div>
                              <div className='des'>Registered Dietitian</div>
                            </div>
                            <div className='arrow'>
                              <img src='arrow-2.svg' alt='' />
                            </div>
                          </div>
                        </div>
                        <div className="card-face card-back">
                          <div className="back-content">
                            <h3>About Jenny</h3>
                            <p>Jenny is a renowned Keto Diet Specialist with over 10 years of experience.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='list-item'>
                    <div className='card-container'>
                      <div className="card">
                        <div className="card-face card-front">
                          <div className='influencer-image'>
                            <img src='Aswhini.png' alt='Influencer Image' />
                          </div>
                          <div className='text-part'>
                            <div className='author'>
                              <div className='name'>Ashwini Dunga Lipare</div>
                              <div className='des'>Registered Dietitian</div>
                            </div>
                            <div className='arrow'>
                              <img src='arrow-2.svg' alt='' />
                            </div>
                          </div>
                        </div>
                        <div className="card-face card-back">
                          <div className="back-content">
                            <h3>About Ashwini</h3>
                            <p>Ashwini Dunga Lipare is a Registered Dietician (RD) and her accreditations include PgCND, Certified Diabetes Educator (CDE), Gut Health Specialist (FODMAP), Certified Yoga Educator. Having over 13+ years’ experience in Clinical Nutrition she is an expert in Weight Management, Holistic Lifestyle Approach, Endocrine Disorders, Cardiac Health, Gastrointestinal Disorders and PCOD/PCOS.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Marquee>
              </div>
              <a href='#contact' className='btn-default'>Join As a influencer
                <div className='icon'>
                  <img src='arrow.svg' alt='Logo' />
                </div>
              </a>
            </div>
          </div>
        </section>
      </Section>

      <Section>
        <section className='testimonial-section'>
          <div className='container'>
            <div className='row justify-content-center'>
              <h6 className='section-title mb-2'>CEO’s Message</h6>
              <div className='col-md-9'>
                <div className='main-review'>
                  <div className='image-part'>
                    {/* <img src='user1.jpg' alt='User Image' /> */}
                    <div className='video-part'>
                      <video width="400"
                        height="500"
                        muted
                        controls
                      >
                        <source src="video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div className='review-part'>
                    <div className='quote'>
                      <img src='quote.svg' alt='' />
                    </div>
                    <div className='content-part'>

                      <div className='title'>"Beyond Labels: A Personal Journey That Created ChukiApp."</div>
                      <div className='des'>"My journey with food labels began years ago when I found myself looking at tiny ingredient lists on every product I picked up. While the colorful packaging promised "healthy" and "natural" on the front, the back often told a different story - hidden sugars, harmful additives, and confusing E-numbers. I spent countless hours in grocery aisles, trying to decode what I was really putting into my body. It struck me that millions of others must be facing this same challenge every day - wanting to eat healthier but getting lost in marketing claims versus reality. That's when ChukiApp was born - from my personal frustration and desire to simplify this process for everyone. Our AI-powered scanner now does in seconds what used to take me minutes, revealing the truth behind food labels with just one click. This isn't just technology; it's my solution to a problem I lived with. Thank you for letting us be your trusted companion on this journey toward better health choices."</div>
                      <div className='author'>
                        <div className='name'>Murli Singh Rajpurohit</div>
                        <div className='des'>CEO, ChukiApp</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='other-reviews'>
            <h6 className='section-title mb-5'>What Our Users Say</h6>
            <div className='row justify-content-center'>
              <div className='lists'>
                <Marquee gradient={true} gradientWidth={400}>
                  <div className='item'>
                    <div className='review-part'>
                      <div className='content-part'>
                        <div className='rating-lists'>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className='title'>"A Game-Changer for Healthy Eating!"</div>
                        <div className='des'>"Got tired of googling every ingredient while shopping. This makes it so easy! Used up all free scans in 2 days 😆 Premium is worth it if you're serious about checking what's in your food. Way better than those random whatsapp forwards about food chemicals."</div>
                        <div className='author'>
                          <div className='name'>Mansi Dixit</div>
                          <div className='des'>Premium User</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='review-part'>
                      <div className='content-part'>
                        <div className='rating-lists'>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className='title'>"Clear and Simple UI"</div>
                        <div className='des'>"Downloaded it to check my protein powder, ended up scanning my whole kitchen lol. Found out my "sugar free" cookies had weird chemicals. Now my mom keeps asking me to scan everything before she buys 😅 Worth going premium just for unlimited scans tbh."</div>
                        <div className='author'>
                          <div className='name'>Keerthi Suresh</div>
                          <div className='des'>Premium User</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='review-part'>
                      <div className='content-part'>
                        <div className='rating-lists'>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className='title'>"Healthier choices"</div>
                        <div className='des'>"With the news about sucralose being potentially harmful, I wondered what else was in our food that could actually be causing us harm. I was shocked to find it with this app that most of what i was eating was potentially toxic! It has helped me to make better choices for sure."</div>
                        <div className='author'>
                          <div className='name'>Manish Yadav</div>
                          <div className='des'>Premium User</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='review-part'>
                      <div className='content-part'>
                        <div className='rating-lists'>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className='title'>"Actually works in local stores!"</div>
                        <div className='des'>"Using this since last month. Great that it works on indian products also! Had the free version but kept running out of scans lol. Premium solved that problem. Already helped me find better options for my dad's sugar free foods"</div>
                        <div className='author'>
                          <div className='name'>Shubham Pandit</div>
                          <div className='des'>Premium User</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='review-part'>
                      <div className='content-part'>
                        <div className='rating-lists'>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className='title'>"Wish i knew this app before"</div>
                        <div className='des'>"Been using it for 2 weeks now, scanned stuff in my local store and omg?? The 'healthy' cornflakes I was having everyday turned out to be not so healthy. Got premium to scan more items, already found better alternatives. No more marketing traps now 👍"</div>
                        <div className='author'>
                          <div className='name'>Surendra Fartiyal</div>
                          <div className='des'>Premium User</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='review-part'>
                      <div className='content-part'>
                        <div className='rating-lists'>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className='title'>"So far a great app!"</div>
                        <div className='des'>"So far i love it. I scanned 3 products that had "healthy meal" on tha package, I am shocked how bad it was rated. Guessing I'll be checking everything from now on before i put it in my cart. It would be nice if i could scan my Vitamin Supplement too! Great job developers."</div>
                        <div className='author'>
                          <div className='name'>Vineet Sehrawat</div>
                          <div className='des'>Premium User</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </section >
      </Section>
      <Section>
        <section id='contact' className='contact-section'>
          <div className='container'>
            <h5 className='section-title'>Contact Us </h5>
            <h6>We’d Love to Hear From You!</h6>
            <p>Have questions, feedback, or need assistance? Our team is here to help. Reach out to us through any of the channels below, and we’ll get back to you as soon as possible.</p>
            <div className='row justify-content-between align-items-center'>

              <div className='col-md-6'>
                <div className='contact-part'>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="First name"
                          defaultValue="Mark"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="12" controlId="validationCustom02">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Email"
                          defaultValue="johna@gmail.com"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>

                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control
                          required
                          type="number"
                          placeholder="Contact No."
                          defaultValue="+98776543210"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid city.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Contact For</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid city.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 textarea-part">
                      <Form.Label>Write a message</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                      />
                    </Form.Group>
                    <button type="submit" className='btn-default'>Submit <i className="bi bi-send-fill ms-3"></i></button>
                  </Form>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='video-part'>
                  <video width="100%"
                    height="400"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="353109918600577027.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Section>
      {/* <Section>
        <section id='blogs' className='blog-section'>
          <div className='container'>
            <div className='row'>
              <div className='section-title'>Discover the latest blogs</div>
              <div className='blog-lists'>
                <div className='left-part'>
                  <div className='blog-item'>
                    <div className='image-part'>
                      <img src='blog.png' />
                    </div>
                    <div className='text'>
                      <div className='tag'>Tips</div>
                      <div className='title'>Revolutionizing Nutrition with the Food Scanning App</div>
                      <div className='link'>Read More</div>
                    </div>
                  </div>
                </div>
                <div className='right-part'>
                  <div className='lists'>
                    <div className='item'>
                      <div className='image-part'>
                        <img src='blog.png' />
                      </div>
                      <div className='text'>
                        <div className='tag'>Tips</div>
                        <div className='title'>Revolutionizing Nutrition with the Food Scanning App</div>
                        <div className='link'>Read More</div>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='image-part'>
                        <img src='blog.png' />
                      </div>
                      <div className='text'>
                        <div className='tag'>Tips</div>
                        <div className='title'>Revolutionizing Nutrition with the Food Scanning App</div>
                        <div className='link'>Read More</div>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='image-part'>
                        <img src='blog.png' />
                      </div>
                      <div className='text'>
                        <div className='tag'>Tips</div>
                        <div className='title'>Revolutionizing Nutrition with the Food Scanning App</div>
                        <div className='link'>Read More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Section> */}
      <Section>
        <section className='newsletter-section'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-9'>
                <div className='newsletter-part'>
                  <div className='title'>Join Us Today</div>
                  <p>"Stay updated with the latest features, tips, and exclusive offers from Chuki!
                    Join our newsletter today and be the first to know about all things Chuki.
                    Sign up now and never miss an update!"</p>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3 form-flex">
                      <Form.Group className='form-group' controlId="validationCustom01">
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter your email"
                          defaultValue=""
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      <Button type="submit" className='btn btn-default'>Submit<i className="bi bi-send-fill ms-3"></i></Button>
                    </Row>
                  </Form>
                </div>
              </div>
            </div>

          </div>
        </section>
      </Section>
      <Section>
        <section id='faqs' className='faq-section'>
          <div className='container'>
            <div className='faq-part'>
              <div className='section-title'>FAQs(Frequently Asked Questions)</div>
              <Accordion
                activeKey={activeKey}
                onSelect={(eventKey) => handleToggle(eventKey)}
                flush
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>

                    {activeKey === '0' ? (
                      <FaMinus style={{ marginRight: '10px' }} />
                    ) : (
                      <FaPlus style={{ marginRight: '10px' }} />
                    )} What is ChukiApp?{' '}
                  </Accordion.Header>
                  <Accordion.Body>
                    ChukiApp is a food scanning app that helps you easily analyze food items by scanning their barcodes or QR codes. It provides nutritional information, ingredient lists, and dietary recommendations based on your preferences.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>

                    {activeKey === '1' ? (
                      <FaMinus style={{ marginRight: '10px' }} />
                    ) : (
                      <FaPlus style={{ marginRight: '10px' }} />
                    )} How do I scan food items with the app?{' '}
                  </Accordion.Header>
                  <Accordion.Body>
                    Simply open the app, tap the scan button, and point your phone's camera at the barcode or QR code of the food item. The app will automatically retrieve detailed information about the product.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>

                    {activeKey === '2' ? (
                      <FaMinus style={{ marginRight: '10px' }} />
                    ) : (
                      <FaPlus style={{ marginRight: '10px' }} />
                    )}Can the app suggest healthy alternatives?{' '}
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, based on the nutritional information and your dietary preferences, the app will suggest healthier alternatives to the food item you scanned.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>

                    {activeKey === '3' ? (
                      <FaMinus style={{ marginRight: '10px' }} />
                    ) : (
                      <FaPlus style={{ marginRight: '10px' }} />
                    )} Can I use the app if I have specific dietary restrictions?{' '}
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, the app allows you to set preferences for dietary restrictions (e.g., gluten-free, vegan), and it will provide information that aligns with your dietary needs.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </section>
      </Section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className='logo-part'>
                <img src='footer-logo.svg' className="img-fluid" />
              </div>
              <p>Scan your food to uncover nutritional information, ingredients, and insights instantly. Make informed dietary choices and live a healthier lifestyle with ease.</p>
              <div className='lists'>
                <a href='#feature' className=''>Features</a>
                {/* <a href='#blogs' className=''>Blogs</a> */}
                <a href='#faqs' className=''>FAQs</a>
                <a href='#contact' className=''>Contact</a>
              </div>
              <div className='follow-part'>
                <p>Follow Us</p>
                <div className='social-links'>
                  <a href='https://www.instagram.com/chukiapp_official/' className='' target='_blank'>
                    <img src='insta.svg' />
                  </a>
                  <a href='https://www.linkedin.com/company/chuki/' className='' target='_blank'>
                    <img src='lk.svg' />
                  </a>
                  <a href='https://www.youtube.com/@Chukiapp' className='' target='_blank'>
                    <img src='youtube.png' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='copyright'>
                <p>©2024 ChukiApp. All rights reserved.</p>
                <div className='privacy-part'>
                  <a href='' className=''>Terms & Conditions</a>
                  <span>|</span>
                  <a href='' className=''>Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


