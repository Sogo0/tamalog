import React from "react";
import Link from "next/link";
import Image from "next/image";
import stylesSidever from "./LeftSidebar.module.css"; // スタイルのインポート
import local from "../../styles/local.module.css";
import { UserCircle, Keyboard, TrayArrowUp, Footprints, ClipboardText, DeviceMobileCamera, CalendarCheck } from "@phosphor-icons/react";

// 画像のインポート
import sideBarImageOUT00 from '../../public/Sidever_imageOUT000.png';
import sideBarImage00 from '../../public/Sidever_image000.png';
import sideBarImage01 from '../../public/Sidever_image001a.png';
import sideBarImage02 from '../../public/Sidever_image002.png';
import sideBarImage03 from '../../public/Sidever_image003.png';
import sideBarImage04 from '../../public/Sidever_image004.png';

interface LeftsideverINDEXProps {
  isLoggedIn: boolean;
  setIsLogoutModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSignUpModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTextInputModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsImageInputModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCalendarModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftsideverINDEX: React.FC<LeftsideverINDEXProps> = ({
  isLoggedIn,
  setIsLogoutModalOpen,
  setIsSignUpModalOpen,
  setIsTextInputModalOpen,
  setIsImageInputModalOpen,
  setIsCalendarModalOpen,
}) => {
  return (
      <div className={local.sidebarA}>
      {isLoggedIn ? (
        <button onClick={() => setIsLogoutModalOpen(true)} className={stylesSidever.sidebarButton}>
          <div className={stylesSidever.buttonContent}>
            <Image src={sideBarImageOUT00} alt="Logout" width={150} />
          </div>
        </button>
      ) : (
        <button onClick={() => setIsSignUpModalOpen(true)} className={stylesSidever.sidebarButton}>
          <div className={stylesSidever.buttonContent}>
            <UserCircle size={50} color="#4f2f2f" weight="duotone" />
            <div className={stylesSidever.buttonText}>ろぐいん</div>
          </div>
        </button>
      )}

      <button onClick={() => setIsTextInputModalOpen(true)} className={stylesSidever.sidebarButton}>
        <div className={stylesSidever.buttonContent}>
          <Keyboard size={50} color="#4f2f2f" weight="duotone" />
          <div className={stylesSidever.buttonText}>てきすと入力</div>
        </div>
      </button>

      <button onClick={() => setIsImageInputModalOpen(true)} className={stylesSidever.sidebarButton}>
        <div className={stylesSidever.buttonContent}>
          <TrayArrowUp size={50} color="#4f2f2f" weight="duotone" />
          <div className={stylesSidever.buttonText}>いめーじ入力</div>
        </div>
      </button>

      <button onClick={() => setIsCalendarModalOpen(true)} className={stylesSidever.sidebarButton}>
        <div className={stylesSidever.buttonContent}>
          <Footprints size={50} color="#4f2f2f" weight="duotone" />
          <div className={stylesSidever.buttonText}>すぽーつ</div>
        </div>
      </button>

      <Link href="/create-post" passHref>
        <button className={stylesSidever.sidebarButton}>
          <div className={stylesSidever.buttonContent}>
            <ClipboardText size={50} color="#4f2f2f" weight="duotone" />
            <div className={stylesSidever.buttonText}>あかうんと</div>
          </div>
        </button>
      </Link>

      <Link href="/mobile-page" passHref>
        <button className={stylesSidever.sidebarButton}>
          <div className={stylesSidever.buttonContent}>
            <DeviceMobileCamera size={50} color="#4f2f2f" weight="duotone" />
            <div className={stylesSidever.buttonText}>すまほ</div>
          </div>
        </button>
      </Link>

      <Link href="/mobile-page" passHref>
        <button className={stylesSidever.sidebarButton}>
          <div className={stylesSidever.buttonContent}>
            <CalendarCheck size={50} color="#4f2f2f" weight="duotone" />
            <div className={stylesSidever.buttonText}>かれんだー</div>
          </div>
        </button>
      </Link>
    </div>
    
  );
};

export default LeftsideverINDEX;
