import React from 'react'
import { useState, useDeferredValue } from 'react';
function Testdemo() {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
  return (
    
    <div>Testdemo</div>
  )
}

export default Testdemo