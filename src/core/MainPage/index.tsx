import React from 'react'
import Filter from './Components/Filter/Filter'
import { List } from './Components/List/List'

export default function MainPage() {
	

	return (
		<div className="wrapper">
      <div>
        <h1>Hacker News</h1>
      </div>

      <div className="main-layout">
        <Filter searchText="Some" sortBy="latest"/>
        <List/>
      </div>
    </div>
	)
}
