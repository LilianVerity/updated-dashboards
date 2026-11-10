'use client';

import { useRouter } from 'next/navigation';
import { Button } from './Button';
import { braahOne } from '../../../lib/fonts';
import { QuiverLogo, ShoppingCartLogo, NotificationBellLogo, UserLogo, MarketLogo } from './logos';
import { useState } from 'react';
import { Search } from 'lucide-react';
import SignUpModal from './authModals/SignUpModal';
import LoginModal  from './authModals/LogInModal';

export interface HeaderProps {
  loggedIn? : boolean;
  student?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export const Header = ({
  student,
  loggedIn,
  onLogin,
  onLogout,
  onCreateAccount,
  searchValue,
  onSearchChange,
}: HeaderProps) => {
  const router = useRouter(); // used to go to other pages
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <header>
    <div className="flex flex-row items-center justify-between left-0 top-0 h-[59px] w-full bg-[#008A58] shadow-[0px_4px_8.8px_rgba(0,0,0,0.4)]">
        {loggedIn ? (
                    student ? ( /* IF STUDENT */
            <>
                <div className="mx-[45px] flex flex-row items-center gap-3">
                  <QuiverLogo />
                  <div className = "flex flex-row items-end">
                    <h1 className={`${braahOne.className} flex items-center text-[21.6867px] leading-[30px] font-normal text-white`}>
                      The Quiver
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-10"> {/* NAV OPTIONS + SEARCH */}
                  <div className="flex items-center gap-[30px]">
                    <Button
                      size="small"
                      type='nav'
                      textColor='#FFFFFF'
                      hoverTextColor='#b9dccf'
                      onClick={() => router.push("/student/home")}
                      label="Home"
                      fontSize={18}
                    />
                    <Button
                      primary
                      size="small"
                      type='nav'
                      textColor='#FFFFFF'
                      hoverTextColor='#b9dccf'
                      onClick={() => {}} /* TODO: categories page doesn't exist yet */
                      label="Categories"
                      fontSize={18}
                    />
                    <Button
                      primary
                      size="small"
                      type='nav'
                      textColor='#FFFFFF'
                      hoverTextColor='#b9dccf'
                      onClick={() => router.push("/student/campus_orgs")}
                      label="Organizations"
                      fontSize={18}
                    />
                    <Button
                      primary
                      size="small"
                      type='nav'
                      textColor='#FFFFFF'
                      hoverTextColor='#b9dccf'
                      onClick={onCreateAccount}
                      label="Orders"
                      fontSize={18}
                    />
                  </div>

                  {onSearchChange && ( /* SEARCH BAR (only shows when a page passes onSearchChange) */
                    <div className="relative hidden w-[300px] lg:block xl:w-[380px]">
                      <Search
                        size={14}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6B6B]"
                      />
                      <input
                        type="text"
                        value={searchValue ?? ''}
                        onChange={(e) => onSearchChange(e.target.value)}
                        aria-label="Search org merchandise"
                        className="h-[34px] w-full rounded-[6px] bg-[#F5FEF2] pl-9 pr-3 text-[12px] text-[#1E3A2C] outline-none"
                      />
                      {/* custom placeholder so only "LSCS Merch" is green + bold */}
                      {!searchValue && (
                        <span className="pointer-events-none absolute left-9 top-1/2 max-w-[calc(100%-3rem)] -translate-y-1/2 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] text-[#8DBBA6]">
                          Search org merchandise or recommendation like{' '}
                          <span className="font-bold text-[#00B775]">LSCS Merch</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="mr-[45px] flex items-center gap-[30px] border-l border-[#00B775] pl-6"> {/* ICONS */}
                  <Button
                    primary
                    size="small"
                    type='nav'
                    textColor='#FFFFFF'
                    hoverTextColor='#b9dccf'
                    onClick={onCreateAccount}
                    logo={<ShoppingCartLogo width={16} height={16}/>}
                    fontSize={20}
                  />
                  <Button
                    primary
                    size="small"
                    type='nav'
                    textColor='#FFFFFF'
                    hoverTextColor='#b9dccf'
                    onClick={onCreateAccount}
                    logo={<NotificationBellLogo width={16} height={16}/>}
                    fontSize={20}
                  />
                  <Button
                    primary
                    size="small"
                    type='nav'
                    textColor='#FFFFFF'
                    hoverTextColor='#b9dccf'
                    onClick={onCreateAccount}
                    logo={<UserLogo width={16} height={16}/>}
                    fontSize={20}
                  />
                </div>
          </>
          ) : 
                            <>
                <div className="mx-[45px] flex flex-row items-center gap-3">
                  <QuiverLogo />
                  <div className="flex flex-row items-center gap-2">
                    <h1 className={`${braahOne.className} flex items-center text-[21.6867px] leading-[30px] font-normal text-white`}>
                      The Quiver
                    </h1>
                    {/* SELLER HUB TAG */}
                    <span className="rounded-full border border-[#7FD3B0]/70 bg-[#00B775]/30 px-2 py-[2px] text-[10px] leading-none text-white">
                      Seller Hub
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-[50px]"> {/* NAV OPTIONS */}
                  <Button
                    size="small"
                    type='nav'
                    textColor='#FFFFFF'
                    hoverTextColor='#b9dccf'
                    onClick={() => router.push("/org/dashboard")}
                    label="Dashboard"
                    fontSize={18}
                  />
                  <Button
                    primary
                    size="small"
                    type='nav'
                    textColor='#FFFFFF'
                    hoverTextColor='#b9dccf'
                    onClick={() => {}} /* TODO: sales page doesn't exist yet */
                    label="Sales"
                    fontSize={18}
                  />
                  <Button
                    primary
                    size="small"
                    type='nav'
                    textColor='#FFFFFF'
                    hoverTextColor='#b9dccf'
                    onClick={() => router.push("/org/orders")}
                    label="Orders"
                    fontSize={18}
                  />
                  <Button
                    primary
                    size="small"
                    type='nav'
                    textColor='#FFFFFF'
                    hoverTextColor='#b9dccf'
                    onClick={() => router.push("/org/inventory")}
                    label="Inventory"
                    fontSize={18}
                  />
                </div>
                <div className="mr-[45px] flex items-center gap-[30px] border-l border-[#00B775] pl-6"> {/* ICONS */}
                  <Button
                    primary
                    size="small"
                    type='nav'
                    textColor='#FFFFFF'
                    hoverTextColor='#b9dccf'
                    onClick={onCreateAccount}
                    logo={<NotificationBellLogo width={16} height={16}/>}
                    fontSize={20}
                  />
                  <Button
                    primary
                    size="small"
                    type='nav'
                    textColor='#FFFFFF'
                    hoverTextColor='#b9dccf'
                    onClick={onCreateAccount}
                    logo={<UserLogo width={16} height={16}/>}
                    fontSize={20}
                  />
                </div>
            </>
        ) : (
          <>
            <div className="mx-[45px] flex flex-row items-center justify-between gap-3">
              <QuiverLogo />
              <div className = "flex flex-row items-end">
                <h1 className={`${braahOne.className} flex items-center text-[21.6867px] leading-[30px] font-normal text-white`}>
                  The Quiver
                </h1>
              </div>
            </div>
              <div className="flex items-center gap-[30px]">
                <Button
                  size="small"
                  onClick={onLogin}
                  textColor='#FFFFFF'
                  hoverTextColor='#b9dccf'
                  label="New Arrivals"
                  fontSize={15}
                  type='nav'
                />
                <Button
                  primary
                  size="small"
                  onClick={onCreateAccount}
                  textColor='#FFFFFF'
                  hoverTextColor='#b9dccf'
                  label="Best Sellers"
                  fontSize={15}
                  type='nav'
                />
                <Button
                  primary
                  size="small"
                  onClick={onCreateAccount}
                  textColor='#FFFFFF'
                  hoverTextColor='#b9dccf'
                  label="About Us"
                  fontSize={15}
                  type='nav'
                />
                <Button
                  size="small"
                  onClick={onLogin}
                  textColor='#FFFFFF'
                  hoverTextColor='#b9dccf'
                  label="FAQs"
                  fontSize={15}
                  type='nav'
                />
            </div>
            <div className ="border-l-2 border-[#00B775] pl-5 mx-[45px] flex items-center flex-row gap-[8px]"> {/* LOGIN AND SIGNUP */}
              <Button
                primary
                size="small"
                onClick={() => setIsLoginOpen(true)}
                label="Log In"
                paddingX={10}
                paddingY={6}
                textColor='#FFFFFF'
                hoverTextColor='#b9dccf'
                type='nav'
                fontSize={15}
              />
              <Button
                size="small"
                onClick={() => setIsSignUpOpen(true)}
                label="Sign Up"
                paddingX={10}
                paddingY={6}
                textColor='#FFFFFF'
                hoverTextColor='#00B775'
                fontSize={15}
                type='nav'
              />
            </div>
          </>
        )}
    </div>

    <LoginModal
      isOpen={isLoginOpen}
      onClose={() => setIsLoginOpen(false)}
    />

    <SignUpModal
      isOpen={isSignUpOpen}
      onClose={() => setIsSignUpOpen(false)}
    />
  </header>
)
};