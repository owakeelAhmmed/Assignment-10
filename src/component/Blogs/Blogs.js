import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className=' card-container container'>
             <div className=" cards-body row row-cols-1 row-cols-md-3 g-4">
        <div className=" col">
            <div className="card cards-container h-100">
                <div className="card-body">
                <h3 className="card-title text-white">What is Firebase ?</h3>
                <p className="card-text text-white">Firebase এর মাধ্যমে রিয়াল টাইম ডাটা ব্যাবহার  করতে পাড়া যায়।  ডাটা বেজ থেকে সহজেই ডাটা দ্রুত আদান প্রদান করা যায়। এর মাধ্যমে আরো নানা ধরনের অ্যাপ্লিকেশন তৈরি করা যায় যেমন মোবাইল অ্যাপ তৈরি করা যায় ইত্যাদি। এর সাহায্যে website hosting করা যায় এর সাহাযে Authentication করা যায়।</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card cards-container h-100">
               <div className="card-body">
                <h3 className="card-title text-primary">Difference between authorization and authentication ?</h3>
                <p className="card-text text-primary">Authentication  user কে তা চেক করে। Authentication পাচওয়ার্ড এবং ওয়ান-টাইম পিন এর মাধ্যমে verification সম্পন্ন করে।
                Authorization নিধারণ করে দেয় কোন ব্যাবহার কারি কোন রিসোর্স এ প্রবেশ করবে। Authentication এর পরে Authorization এর কাজ শুরু হয়। এটা দেখা যায় না বা পরিবর্তন করা যায় না।</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card cards-container h-100">
                 <div className="card-body">
                <h5 className="card-title text-danger">What services does Firebase provide ?</h5>
                  <p className="card-text text-danger">
                   <li> Firebase Authentication ব্যাকএন্ড সার্ভিস প্রদান করে।</li>
                    <li>Password Authentication সার্ভিস প্রদান করে।</li>
                    <li>Phone Number Authentication সার্ভিস প্রদান করে।</li>
                    <li>Google Authentication সার্ভিস প্রদান করে।</li>
                    <li>Facebook Authentication সার্ভিস প্রদান করে।</li>
                    <li>Twitter Authentication  সার্ভিস প্রদান করে।</li>
                    </p>
                 </div>
            </div>
        </div>
    </div>
       </div>
    );
};

export default Blogs;