interface RegulationItemProps {
  heading: string
  desc: string
  list: string[]
}

function RegulationItem({ heading, desc, list }: RegulationItemProps) {
  return (
    <div className='p-2'>
      <h2 className='font-bold text-md mb-2'>{heading}</h2>
      <p className='text-ms text-gray-600 italic mb-1'>{desc}</p> 

      <ul className='pl-5'>
        {list.map((item, index) => (
          <li className='list-disc' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default RegulationItem
