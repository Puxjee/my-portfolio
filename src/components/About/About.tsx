"use client";
import Image from "next/image";
import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import { useI18n } from "@/lib/i18n";

const About = () => {
  const { t } = useI18n();

  return (
    <div
      id="about"
      className="py-4 flex flex-row items-center justify-between gap-50"
    >
      <div className="max-w-xl text-gray-300 text-left space-y-6">
        {/*about me text */}
        <p>{t("about.intro")}</p>
        <p>{t("about.paragraph1")}</p>
        <p>{t("about.paragraph2")}</p>
        <p>{t("about.paragraph3")}</p>
        <p>✨ {t("about.whatIBring")}</p>
        <ul>
          <li>• {t("about.list1")}</li>
          <li>• {t("about.list2")}</li>
          <li>• {t("about.list3")}</li>
          <li>• {t("about.list4")}</li>
        </ul>
      </div>
      {/*about me image */}
      <ProfileCard
        avatarUrl="/aboutme.png"
        iconUrl="/pattern-icon.svg"
        grainUrl="/grain.jpg" // Optional grain texture overlay effect
        behindGradient="linear-gradient(135deg, #C778DD 0%, #C778DD 100%)"
        innerGradient="linear-gradient(120deg, #232946 0%, #C778DD 100%)"
        showBehindGradient={true}
        enableTilt={false}
        enableMobileTilt={false}
        mobileTiltSensitivity={0}
        miniAvatarUrl=""
        name={t("profile.name")}
        title={t("profile.title")}
        handle="puxje"
        showUserInfo={true}
      />
    </div>
  );
};

export default About;
