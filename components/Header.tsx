import React, { useEffect } from "react";
import Link from "next/link";
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
  IoPersonCircle,
} from "react-icons/io5";
import { useAppSelector } from "../hooks/redux.hook";
import { useDispatch } from "react-redux";
import { calculateCart } from "../slices/cart/cartSlice";

function Header() {
  const { amount, cartItem } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateCart());
  }, [cartItem]);

  return (
    <div className="flex h-20 border-b border-neutral-300 bg-dark bg-opacity-40">
      <div className="w-72 border-r border-neutral-300 flex p-5 items-center justify-start">
        <Link href={`/`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="189" height="32" viewBox="0 0 129 32" fill="none">
            <path xmlns="http://www.w3.org/2000/svg" d="M47.5088 21.6422C50.0568 21.6422 51.2815 20.0159 51.2815 18.4293C51.2815 17.0013 50.3136 15.8312 48.3977 15.4345L47.015 15.137C46.4817 15.0379 46.1262 14.7404 46.1262 14.2644C46.1262 13.7091 46.6793 13.2926 47.3706 13.2926C48.0404 13.2926 48.5418 13.6525 48.8748 14.3725C48.9361 14.5049 49.0814 14.5764 49.2236 14.5443L50.8082 14.1859C50.9748 14.1483 51.0794 13.9826 51.0417 13.8159C51.0374 13.7967 51.0312 13.778 51.0233 13.7599C50.3016 12.1129 49.0775 11.2894 47.3508 11.2894C45.2571 11.2894 43.7165 12.7372 43.7165 14.4825C43.7165 15.851 44.5658 16.9815 46.4422 17.398L47.7261 17.6955C48.4767 17.8541 48.773 18.2111 48.773 18.6474C48.773 19.1631 48.3582 19.6192 47.4891 19.6192C46.7841 19.6192 46.2249 19.1967 45.8116 18.3517C45.749 18.2235 45.6067 18.1548 45.4674 18.1855L43.8167 18.549C43.6499 18.5857 43.5444 18.7507 43.5811 18.9177C43.5854 18.9372 43.5916 18.9562 43.5995 18.9745C44.3725 20.753 45.6756 21.6422 47.5088 21.6422ZM55.4047 24.8036V20.3927C55.8787 21.0472 56.8663 21.5827 58.2095 21.5827C60.955 21.5827 62.7919 19.4011 62.7919 16.446C62.7919 13.5504 61.1525 11.3688 58.3082 11.3688C56.8466 11.3688 55.7602 12.0233 55.3257 12.7769V11.8963C55.3257 11.7255 55.1872 11.5869 55.0164 11.5869H53.0869C52.9161 11.5869 52.7777 11.7255 52.7777 11.8963V24.8036C52.7777 24.9744 52.9161 25.113 53.0869 25.113H55.0954C55.2662 25.113 55.4047 24.9744 55.4047 24.8036ZM57.7947 19.2226C56.4515 19.2226 55.3652 18.1913 55.3652 16.4658C55.3652 14.7404 56.4515 13.7289 57.7947 13.7289C59.1378 13.7289 60.2044 14.7404 60.2044 16.4658C60.2044 18.2111 59.1378 19.2226 57.7947 19.2226ZM66.8756 21.0353V16.8823C66.8756 14.78 68.041 14.1255 69.3841 14.1255C69.4874 14.1255 69.6358 14.1368 69.8291 14.1594C69.9987 14.1792 70.1523 14.0577 70.1721 13.8881C70.1735 13.8761 70.1742 13.8642 70.1742 13.8522V11.8306C70.1743 11.6685 70.0493 11.5339 69.8876 11.522C69.7576 11.5124 69.649 11.5076 69.5619 11.5076C68.7323 11.5076 67.3892 11.7456 66.7966 13.0347V11.8963C66.7966 11.7255 66.6582 11.5869 66.4874 11.5869H64.5579C64.3871 11.5869 64.2486 11.7255 64.2486 11.8963V21.0353C64.2486 21.2062 64.3871 21.3447 64.5579 21.3447H66.5664C66.7372 21.3447 66.8756 21.2062 66.8756 21.0353ZM72.7173 10.0003C73.6258 10.0003 74.3369 9.26649 74.3369 8.39384C74.3369 7.48153 73.6258 6.74771 72.7173 6.74771C71.8284 6.74771 71.0976 7.48153 71.0976 8.39384C71.0976 9.26649 71.8284 10.0003 72.7173 10.0003ZM74.0406 21.0353V11.8963C74.0406 11.7255 73.9022 11.5869 73.7314 11.5869H71.7229C71.5521 11.5869 71.4136 11.7255 71.4136 11.8963V21.0353C71.4136 21.2062 71.5521 21.3447 71.7229 21.3447H73.7314C73.9022 21.3447 74.0406 21.2062 74.0406 21.0353ZM78.8552 21.0353V15.732C78.8552 14.6015 79.5267 13.7091 80.6723 13.7091C81.9365 13.7091 82.4698 14.5619 82.4698 15.6527V21.0353C82.4698 21.2062 82.6082 21.3447 82.779 21.3447H84.7875C84.9583 21.3447 85.0968 21.2062 85.0968 21.0353V15.1965C85.0968 13.0546 83.9907 11.3291 81.5809 11.3291C80.5341 11.3291 79.3687 11.7853 78.7762 12.7967V11.8963C78.7762 11.7255 78.6377 11.5869 78.4669 11.5869H76.5374C76.3666 11.5869 76.2282 11.7255 76.2282 11.8963V21.0353C76.2282 21.2062 76.3666 21.3447 76.5374 21.3447H78.5459C78.7167 21.3447 78.8552 21.2062 78.8552 21.0353ZM90.8594 21.4835C91.2917 21.4835 91.71 21.4273 92.1144 21.3149C92.2482 21.2777 92.3408 21.1558 92.3408 21.0168V19.4194C92.3407 19.2486 92.2023 19.1102 92.0315 19.1102C92.0196 19.1102 92.0077 19.1108 91.9959 19.1122C91.8177 19.1329 91.6628 19.1433 91.531 19.1433C90.7804 19.1433 90.3854 18.8656 90.3854 18.0128V13.9272H92.0315C92.2023 13.9272 92.3408 13.7887 92.3408 13.6178V11.8963C92.3408 11.7255 92.2023 11.5869 92.0315 11.5869H90.3854V8.98089C90.3854 8.81002 90.2469 8.6715 90.0761 8.6715H88.3244C88.1536 8.6715 88.0151 8.81002 88.0151 8.98089V10.04C88.0151 10.9126 87.5411 11.5869 86.514 11.5869H86.3294C86.1586 11.5869 86.0202 11.7255 86.0202 11.8963V13.6178C86.0202 13.7887 86.1586 13.9272 86.3294 13.9272H87.7781V18.4689C87.7781 20.3531 88.9632 21.4835 90.8594 21.4835ZM97.3517 21.0746L98.28 13.828H100.334L100.729 11.9604C100.765 11.7932 100.658 11.629 100.491 11.5936C100.47 11.5892 100.448 11.5869 100.427 11.5869H98.754L98.9713 10.516C99.1688 9.60365 99.7219 9.16732 100.512 9.16732C100.737 9.16732 100.932 9.18796 101.098 9.22924C101.263 9.27053 101.431 9.16964 101.472 9.00385C101.473 9.00015 101.474 8.99642 101.475 8.99268L101.799 7.44999C101.832 7.29558 101.743 7.14147 101.593 7.0923C101.094 6.92868 100.648 6.84688 100.255 6.84688C98.5565 6.84688 96.9763 7.62036 96.4628 10.0003L96.127 11.5869H94.7185C94.5724 11.5869 94.4462 11.6893 94.4159 11.8323L94.0728 13.4546C94.0374 13.6218 94.1442 13.786 94.3113 13.8213C94.3324 13.8258 94.3538 13.828 94.3753 13.828H95.6332L94.715 20.996C94.6933 21.1655 94.813 21.3205 94.9824 21.3422C94.9954 21.3439 95.0086 21.3447 95.0217 21.3447H97.0449C97.2005 21.3447 97.3319 21.2291 97.3517 21.0746ZM105.778 21.1775L109.129 14.7007L109.924 21.0737C109.944 21.2285 110.075 21.3447 110.231 21.3447H112.357C112.473 21.3447 112.579 21.2797 112.632 21.1764L117.312 12.0374C117.39 11.8853 117.33 11.6989 117.178 11.621C117.134 11.5986 117.086 11.5869 117.037 11.5869H115.012C114.893 11.5869 114.785 11.6554 114.733 11.763L111.835 17.8343L111.117 11.8594C111.098 11.7039 110.966 11.5869 110.81 11.5869H108.507C108.391 11.5869 108.286 11.6515 108.232 11.7542L105.099 17.8145L104.628 11.8719C104.615 11.711 104.481 11.5869 104.32 11.5869H102.398C102.227 11.5869 102.089 11.7255 102.089 11.8963C102.089 11.9063 102.09 11.9163 102.09 11.9263L102.978 21.0653C102.994 21.2238 103.127 21.3447 103.286 21.3447H105.504C105.619 21.3447 105.725 21.2802 105.778 21.1775ZM121.221 21.5232C122.524 21.5232 123.371 20.8291 123.825 20.1547C123.806 20.3729 123.788 20.6506 123.788 20.8489C123.788 20.9006 123.79 20.9666 123.793 21.0467C123.799 21.213 123.935 21.3447 124.102 21.3447H125.869C126.04 21.3447 126.179 21.2062 126.179 21.0353C126.179 21.0327 126.178 21.0301 126.178 21.0275C126.178 20.993 126.177 20.9599 126.177 20.9282C126.197 20.4721 126.255 19.8176 126.393 19.2028L128.882 7.35876C128.918 7.19155 128.811 7.02749 128.644 6.99233C128.623 6.98793 128.601 6.98571 128.58 6.98571H126.589C126.442 6.98571 126.316 7.08819 126.286 7.23137L125.152 12.6182C124.836 12.0629 124.027 11.3489 122.387 11.3489C119.582 11.3489 117.425 13.8677 117.425 17.1798C117.425 19.5994 118.831 21.5034 121.221 21.5232ZM26.2998 11.7999C26.3954 11.9655 26.4468 12.1531 26.449 12.3444L26.5008 16.9417C26.5058 17.3907 26.2675 17.8071 25.8779 18.03L1.71746 31.8529C1.18371 32.1582 0.503587 31.9729 0.198353 31.4389C0.104221 31.2743 0.0536909 31.0883 0.0515537 30.8986L0.00129962 26.438C-0.00373671 25.991 0.232598 25.576 0.619544 25.3524L24.7789 11.3924C25.3114 11.0848 25.9923 11.2672 26.2998 11.7999ZM122.603 13.7091C123.769 13.7091 124.461 14.5024 124.461 15.7915C124.461 17.9533 123.274 19.2424 121.93 19.2424C120.765 19.2424 120.035 18.4293 120.035 17.0806C120.035 15.494 120.924 13.7091 122.603 13.7091ZM26.1737 0.55791C26.269 0.723346 26.3202 0.91051 26.3223 1.10143L26.3717 5.4849C26.3767 5.93136 26.141 6.34592 25.7548 6.56972L17.1287 11.5686L13.2082 13.8406C12.6171 14.1832 11.8602 13.9814 11.5178 13.39C11.411 13.2056 11.3537 12.9968 11.3513 12.7837L11.3038 8.57368C11.2988 8.12621 11.5356 7.71087 11.9232 7.48745L16.4048 4.90394L24.6532 0.148933C25.186 -0.15818 25.8667 0.0249257 26.1737 0.55791Z" fill="white"/>
          </svg>
        </Link>
      </div>
      <div className="flex-1">
        <div className="w-full h-full flex items-center justify-between p-5">
          <div className="bg-neutral-100 rounded-lg hidden md:flex items-center gap-2 px-3">
            <IoSearchOutline className="text-2xl stroke-neutral-400" />
            <input
              type="search"
              className="py-3 bg-transparent outline-none w-80"
              placeholder="search among 100+ products"
            />
          </div>
          <div className="flex gap-5 items-center">
            <Link href="/" className="hidden md:inline">
              <div className="bg-primary-100 hover:bg-primary-200 transition-all duration-500 py-3 px-5 rounded-xl flex items-center gap-2">
                <p className="text-primary-500">Wishlist</p>
                <IoHeartOutline className="stroke-primary-500 text-2xl" />
              </div>
            </Link>
            <Link href="/cart">
              <div className="bg-primary-100 hover:bg-primary-200 transition-all duration-500 py-3 px-5 rounded-xl flex items-center gap-2">
                <p className="text-primary-500 hidden md:inline">Your Cart</p>
                <div className="relative">
                  <IoCartOutline className="stroke-primary-500 text-2xl" />
                  <span className="absolute -top-2 -right-2 bg-primary-500 px-1 text-xs rounded-full text-light flex items-center justify-center">
                    {amount}
                  </span>
                </div>
              </div>
            </Link>
            <div className="border border-neutral-300 h-12 w-12 rounded-full flex items-center justify-center">
              <IoPersonCircle className="text-3xl fill-neutral-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;