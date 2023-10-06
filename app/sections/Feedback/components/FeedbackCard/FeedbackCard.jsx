'use client'
import './FeedbackCard.css'
import {useState} from "react";
export default function FeedbackCard({ id, alt, author, imgSrc, company, description }) {
    const [showMore, setShowMore] = useState(false)
    return (
        <article className="container">
            <main className="testimonial-box">
                <div className="testimonial">
                    <p className="testimonial-text">
                        {
                                showMore ? description :
                                    description.length > 250 ?
                                        description.substring(0, 250) + '... '
                                        : description
                        }
                        <button onClick={() => setShowMore(!showMore)}>
                            {
                                description.length > 250 ?
                                    showMore ? '  Mostra di più' : '  Mostra di meno'
                                    : ''
                            }
                        </button>
                    </p>
                    <div className="testimonial-user">
                        <img
                            src={imgSrc}
                            alt={alt}
                            className="user-img"
                        />
                            <hgroup className="user-info">
                                <h3 className="user-name">{author}</h3>
                                <h4 className="user-job">{company}</h4>
                            </hgroup>
                    </div>
                </div>
            </main>
        </article>
    );
};