import styled, { keyframes } from 'styled-components';
import React, { useEffect } from "react";
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { HiDocumentText } from 'react-icons/hi';
import {BiSupport} from 'react-icons/bi'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useDispatch , useSelector } from 'react-redux';
import { 
  metamaskConnect
  } from 'redux/reducers/WalletActions'
import NeoXLogo from "./NeoX.png";

function Landing() {

  const dispatch = useDispatch();

  const savedAccount = localStorage.getItem('address');

  useEffect(() => {
    if (savedAccount) {
      // savedAccount가 null이 아닐 경우에만 dispatch 실행
      dispatch(metamaskConnect({ account: savedAccount }));
    } else {
      console.log('No account found in localStorage');
      // 혹은 원하는 대로 기본 값을 설정하거나 처리할 수 있음
    }

  }, []);

  return (
    <>
      <div
        className="px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32 bg-gradient-to-r from-green-100 to-blue-200"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >      
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        The {' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <span className="relative">First </span>
        </span>{' '} Native Stablecoin Project on Neo-X
        <br /> 
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Borrow, Earn, Leverage and more with our stablecoin
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <a
          className="group inline-flex items-center justify-center rounded-full py-4 px-8 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
          variant="solid"
          color="slate"
          href="/overview"
        >
          Mint NCD
        </a>
      </div>
      <div className="mt-20 lg:mt-30">
      <p className="font-display text-base text-slate-900">Supported Chain</p>
        <ul role="list" className="mt-8 flex items-center justify-center">
          <li>
            <ul role="list">
            <LogoNetwork target="_blank" class="logo-network" href="https://ethereum.org" title="https://ethereum.org" rel="noreferrer">
                <img src={NeoXLogo} alt="Neo-X"/>
            </LogoNetwork>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <FooterContainer>
      <p className="font-display text-base text-slate-900 pb-5 text-white">Customer Center</p>
        <SocialIcons>
          {/* <a href="https://x.com/edbankDao" target="_blank" rel="noreferrer" title="Follow on Twitter">
            <FaXTwitter size={40} color="white" />
          </a>
          <a href="https://edbank.gitbook.io/edbank-docs" target="_blank" rel="noreferrer" title="Read Documentation">
            <HiDocumentText size={40} color="white" />
          </a> */}
          <a href="https://tally.so/r/wAqJBk" target="_blank" rel="noreferrer" title="Read Documentation">
            <BiSupport size={40} color="white" />
          </a>
        </SocialIcons>
      </FooterContainer>
    </>
  );
}

// Styled Components for the footer
const FooterContainer = styled.div`
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
  text-align: center;
  background-color: black;
  height: 140px;
  color: white;
`;

const FooterTitle = styled.h2`
  font-size: 1.5rem;
  color: #334155;
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const LogoNetwork = styled.div`
    display: grid;
    gap: 16px;
    grid-template-rows: 60px 1fr;
    justify-items: center;
    max-width: 135px;
    width: 100%;
    color: inherit;
`;



export default Landing;