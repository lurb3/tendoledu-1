import React, { useState } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import { SCHOOLS_THEME } from '../constants/index';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import HeroTitle from '../components/HeroTitle';
import HeroSubtitle from '../components/HeroSubtitle';
import HeroLead from '../components/HeroLead';
import HowItWorksContainer from '../components/HowItWorksContainer';
import HowItWorksCard from '../components/HowItWorksCard';
import YourGainContainer, { SubText } from '../components/YourGainContainer';
import YourGainCard from '../components/YourGainCard';
import SignUpModal from '../components/SignUpModal';
import SignUpButtonDiv from '../components/SignUpButtonDiv';
import HeroImageWrapper from '../components/HeroImageWrapper';
import HowitWorksBg from '../components/HowitWorksBg';
import HowItWorksArrow from '../components/HowItWorksArrow';
import TheTeamContainer from '../components/TheTeamContainer';
import TheTeamCard from '../components/TheTeamCard';

import HeroImage from '../images/hero-schools.svg';
import CreateLogo from '../images/create.svg';
import AdmitLogo from '../images/admit.svg';
import SelectLogo from '../images/select.svg';
import DeliverLogo from '../images/deliver.svg';
import WorkLogo from '../images/work.svg';
import RecognitionLogo from '../images/recognition.svg';
import Arrow1 from '../images/arrow1.svg';
import Arrow2 from '../images/arrow2.svg';
import Arrow3 from '../images/arrow3.svg';


const muiTheme = createMuiTheme(SCHOOLS_THEME, 'schoolsTheme');

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Layout currentPage="schools">
        <SEO
          title="Schools"
          description="Take your school to the next level with Tendoledu"
        />
        <SignUpModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          currentPage="schools"
        />
        <Section backgroundColor="#19B485">
          <HeroTitle> Win Over More Students for Your Online Course </HeroTitle>
          <HeroSubtitle> Get Your Students Real Work Experience with Tendoledu </HeroSubtitle>
          <HeroImageWrapper>
            <img
              src={HeroImage}
              alt="Has a yellow tube where students enter to learn and when exiting, they start applying for jobs"
            />
          </HeroImageWrapper>
          <HeroLead
            message="It’s really hard to be unique when all online schools do the same thing (only teach)"
            Color="white"
          />
          <SignUpButtonDiv
            text="Sign Up Here to change that!"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </Section>
        <Section position="relative" id="HowItWorks">
          <HowItWorksContainer
            cards={[
              <div class="HowItWorksCard" style={{width:'100%', textAlign:'center'}}>
                <HowItWorksCard
                  logo={<img src={CreateLogo} alt="Create logo" style={{ minHeight: '150px' }} />}
                  title="Create"
                  mainText="Create a space for your students to work in"
                  key="create logo"
                />
                <HowItWorksArrow img= {<img src={Arrow1} alt="Create logo" style={{ minWidth: '100%', transform: 'translateY(-200%)'}} />}>
                </HowItWorksArrow>
                <HowItWorksCard
                  logo={<img src={AdmitLogo} alt="Admit logo" style={{ minHeight: '150px' }} />}
                  title="Admit"
                  mainText="Admit students based on criteria you Set"
                  subText="You can add an admission fee too!"
                  key="admit logo"
                />
              </div>,
              <div class="HowItWorksCard" style={{width:'100%', textAlign:'right'}}>
              <HowItWorksArrow img= {<img src={Arrow2} alt="Create logo" style={{ minHeight: '100px'}} />}>
                </HowItWorksArrow>
              </div>,

              <div class="HowItWorksCard" style={{width:'100%', textAlign:'center'}}>
                <HowItWorksCard
                  logo={<img src={SelectLogo} alt="Select logo" style={{ minHeight: '150px' }} />}
                  title="Select and assign"
                  mainText="Select marketing jobs posted by startups, then assign to students"
                  key="select logo"
                />
                <HowItWorksArrow img= {<img src={Arrow3} alt="Create logo" style={{ minWidth: '100%', transform: 'translateY(-200%)'}} />}>
                </HowItWorksArrow>
                <HowItWorksCard
                  logo={<img src={DeliverLogo} alt="Deliver logo" style={{ minHeight: '150px' }} />}
                  title="Deliver & Get Ratings"
                  mainText="Deliver finished work and get ratings"
                  key="deliver logo"
                />
              </div>,
            ]}
            subText="Tendoledu makes you do even more"
          />
          <SignUpButtonDiv
            text="Sign Up Here to know more!"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />

          <HowitWorksBg />
        </Section>
        <Section backgroundColor="#19B485" id="YourGain">
          <YourGainContainer
            cards={[
              <YourGainCard
                logo={<img src={RecognitionLogo} alt="Recognition logo" style={{ maxHeight: '200px' }} />}
                title="Tangible Value"
                subtitle="Recognition"
                text="Lead your students into the real world market. Through Tendoledu you can provide real work experience to your students. Give your students an essential skill to stand out in the workforce."
                key="recognition logo"
              />,
              <YourGainCard
                logo={<img src={WorkLogo} alt="Work logo" style={{ maxHeight: '200px' }} />}
                title="Market Value"
                subtitle="Work"
                text="Your students can show their solid progress and work efforts to employers easily with Tendoledu."
                key="work logo"
              />,
          ]}
            subText={(
              <SubText>
                Help Your Students Impress Their Employers
              </SubText>
            )}
          />
          <SignUpButtonDiv
            text="Sign Up Here to see how!"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </Section>

        <Section backgroundColor="#F5F7F9" id="TheTeam">
          <TheTeamContainer
            cards={[
              <TheTeamCard
                title="Worker1"
                subtitle="CEO"
                key="recognition logo"
              />,
              <TheTeamCard
                title="Worker2"
                subtitle="Marketeer"
                key="work logo"
              />,
              <TheTeamCard
                title="Worker3"
                subtitle="Programmer"
                key="work logo"
              />,
          ]}
          />
        </Section>


      </Layout>
    </MuiThemeProvider>
  );
};
