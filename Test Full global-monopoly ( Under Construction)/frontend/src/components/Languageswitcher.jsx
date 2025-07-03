import React, { useState } from 'react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('EN');

  return (
    <div>
      <label>Language: </label>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="EN">English</option>
        <option value="ES">Spanish</option>
        <option value="DE">German</option>
        <option value="FR">French</option>
        <option value="ZH">Chinese</option>
        <option value="HI">Hindi</option>
      </select>
    </div>
  );
}
