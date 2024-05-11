'use client';

import { useTheme } from "next-themes";
import React, { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), [])

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {
        mounted && (currentTheme === 'dark' ?
          <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme('light')} /> :
          <MdDarkMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme('dark')} />
      )}
    </div>
  )
}
