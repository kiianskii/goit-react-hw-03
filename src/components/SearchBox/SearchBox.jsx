

function SearchBox ({ searchStr, setSearch }) {
	return (
		<div>
			<input
				value={searchStr}
				onChange={e => setSearch(e.target.value)}
				type='text'
				className='input'
				placeholder='Enter name...'
			/>
			{searchStr && (
				<button className='btn border' onClick={() => setSearch('')}>
					Reset
				</button>
			)}
		</div>
	)
}

export default SearchBox