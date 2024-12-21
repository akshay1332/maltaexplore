import { type FC } from 'react';
import { Header } from '@/components/Header';
import { PrivacyLayout } from '@/components/privacy-layout';
import { PrivacyContent } from '@/components/privacy-content';
import { Footer } from '@/components/Footer';
import Banner from '@/components/banner';

const PrivacyPage: FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <PrivacyLayout>
          <div className="mt-16">
            <Banner url="https://s3-alpha-sig.figma.com/img/fc25/458a/3e1b4f4a9926b7f3d91b10f931a0568a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3bswHrQWskga2vcPwHIvSTBWovCIByZaU5rh1ZDxkpb1IyeWDBPmBfxUXiCUMuHHzVtNm6CRkPWLv-Vmi~CkVIjS6Dbj4izvR19gEySHGDT2h9FEqqLsV8AGfXBRcTzCFOTheXedbBcRZANt7xuiY6qPw7GMqBYIMyDZfv5i12~o1w~XCOWgsPHW6PRwcZNK9budzAGLiGOLSK-~abL5zk279Pf5zzQgM~7L1J97DPpadwTkMYGTgC94va3tbMqcAseONRDQIhDvj~myu9RT3Iz-Bmy71UTspGFPwXerfLaho4sqDM1oxAIQIwaZp5URosmsipsVCdrLX3y4P41Eg__">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Privacy Policy
              </h1>
            </Banner>
          </div>
          <PrivacyContent />
        </PrivacyLayout>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
