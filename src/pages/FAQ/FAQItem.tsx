import { FC } from 'react'

interface FAQItemProps {
  heading: string
  faqList: { title: string; content: string }[]
}

const FAQItem: FC<FAQItemProps> = ({ heading, faqList }) => {
  return (
    <div>
      <h3 className="text-md font-bold my-2">{heading}</h3>
      <ul>
        {faqList.map((faq, index) => (
          <>
            <li key={index} className="list-disc font-semibold ml-5">
              {faq.title}
            </li>
            <p className="text-gray-700">{faq.content}</p>
          </>
        ))}
      </ul>
    </div>
  )
}

export default FAQItem
