import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className=' card-container container'>
             <div className=" cards-body row row-cols-1 row-cols-md-3 g-4">
        <div className=" col">
            <div className="card cards-container h-100">
                <div className="card-body">
                <h5 className="card-title text-white">What is Firebase !</h5>
                <p className="card-text text-white">Firebase এর মাধ্যমে রিয়াল টাইম ডাটা ব্যাবহার  করতে পাড়া যায়।  ডাটা বেজ থেকে সহজেই ডাটা দ্রুত আদান প্রদান করা যায়। এর মাধ্যমে আরো নানা ধরনের অ্যাপ্লিকেশন তৈরি করা যায় যেমন মোবাইল অ্যাপ তৈরি করা যায় ইত্যাদি। এর সাহায্যে website hosting করা যায় এর সাহাযে Authentication করা যায়।</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card cards-container h-100">
               <div className="card-body">
                <h5 className="card-title text-primary">Card title</h5>
                <p className="card-text text-primary">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card cards-container h-100">
                 <div className="card-body">
                <h5 className="card-title text-danger">Card title</h5>
                <p className="card-text text-danger">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            </div>
        </div>
</div>
       </div>
    );
};

export default Blogs;