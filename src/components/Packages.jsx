import React from "react";
import dollaricon from "../assests/Dollar.png";
import shareicon from "../assests/share.png";
import codecamp from "../assests/codecamp.png";
import eclispe1 from "../assests/Ellipse 1.png";
import eclipse2 from "../assests/Ellipse 2.png";

const Packages = () => {
  return (
    <section className="bg-[#E5E5E5] pt-40 sm:px-10 sm:py-20">
      <img
        src={eclispe1}
        alt="Ellipse 1"
        className="absolute top-0 left-0 md:bottom-10 sm:bottom-10"
      />
      <img
        src={eclipse2}
        alt="Ellipse 2"
        className="absolute top-0 left-0 md:bottom-10 sm:bottom-10"
      />
      <div className="text-center">
        <h1 className="font-bold text-4xl text-black pb-5">
          Get started with Premium PRO
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center px-7 ">
        <div className="flex flex-col justify-center mb-2 pt-10 pr-1 pb-3.5 pl-3.5 mt-6  text-sm leading-7 text-gray-700 bg-white rounded-xl sm:w-[318px]">
          <div className="text-lg font-bold leading-7 text-black">
            Access these features when you <br />
            get this pricing package for your business.
          </div>
          <div className="flex flex-row sm:flex-row gap-1.5 self-start mt-12 text-gray-700 sm:max-md:mt-10">
            <img
              loading="lazy"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAFKq9WqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFlSURBVEhLvZbhccMgDIU9QkfoCB2hGzgbdKRmg4zQEXxpehfH+eEROkJHaAFJBoQCwsb97nQHknh5MZhzx+mH+QmHwOHz9otDmEQJHf3l+opD0AOd6ZSI4zAPrAaZb5hMJ6z5IocKYjFHccGifL4NmIrxDeNPlHATQ9Jg6Yfr81KQGoioUWogXGOuYQ2hveT0aAgFXIQOfcFvMSdabIP/RfFJCmdmidIzkgWDqH3IiWDrXeKYH3k35/UDp/XQ6wtupxnTeiIBDCzpkAT64evFFTUnMStwuNzfKOkSAlkBCy9ieqEoYDHbhLecDyzpBAhJqEqAkIV8FAWIR0JqAYILVQsQJLRaYG+SDTPv3qprdwvSqQmjP49HbN2PkgkX5h7ddSs3mQjvGCuE6WoamuChN9VkO0o3C0TuU6DxmYBPpjpTzU1w9KYKscUEZ7WpliY4alN7muA8NPWfJjhgapytsfYmuu4PquGyfU/7vfUAAAAASUVORK5CYII="
              className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
              alt="Feature Icon"
            />
            <div className="flex-auto">
              International calling and messaging API
            </div>
          </div>
          <div className="flex flex-row sm:flex-row gap-1.5 mt-3.5">
            <img
              loading="lazy"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAFKq9WqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFlSURBVEhLvZbhccMgDIU9QkfoCB2hGzgbdKRmg4zQEXxpehfH+eEROkJHaAFJBoQCwsb97nQHknh5MZhzx+mH+QmHwOHz9otDmEQJHf3l+opD0AOd6ZSI4zAPrAaZb5hMJ6z5IocKYjFHccGifL4NmIrxDeNPlHATQ9Jg6Yfr81KQGoioUWogXGOuYQ2hveT0aAgFXIQOfcFvMSdabIP/RfFJCmdmidIzkgWDqH3IiWDrXeKYH3k35/UDp/XQ6wtupxnTeiIBDCzpkAT64evFFTUnMStwuNzfKOkSAlkBCy9ieqEoYDHbhLecDyzpBAhJqEqAkIV8FAWIR0JqAYILVQsQJLRaYG+SDTPv3qprdwvSqQmjP49HbN2PkgkX5h7ddSs3mQjvGCuE6WoamuChN9VkO0o3C0TuU6DxmYBPpjpTzU1w9KYKscUEZ7WpliY4alN7muA8NPWfJjhgapytsfYmuu4PquGyfU/7vfUAAAAASUVORK5CYII="
              className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
              alt="Feature Icon"
            />
            <div className="flex-auto">Additional phone numbers</div>
          </div>
          <div className="flex flex-row sm:flex-row gap-1.5 mt-3">
            <img
              loading="lazy"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAFKq9WqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFlSURBVEhLvZbhccMgDIU9QkfoCB2hGzgbdKRmg4zQEXxpehfH+eEROkJHaAFJBoQCwsb97nQHknh5MZhzx+mH+QmHwOHz9otDmEQJHf3l+opD0AOd6ZSI4zAPrAaZb5hMJ6z5IocKYjFHccGifL4NmIrxDeNPlHATQ9Jg6Yfr81KQGoioUWogXGOuYQ2hveT0aAgFXIQOfcFvMSdabIP/RfFJCmdmidIzkgWDqH3IiWDrXeKYH3k35/UDp/XQ6wtupxnTeiIBDCzpkAT64evFFTUnMStwuNzfKOkSAlkBCy9ieqEoYDHbhLecDyzpBAhJqEqAkIV8FAWIR0JqAYILVQsQJLRaYG+SDTPv3qprdwvSqQmjP49HbN2PkgkX5h7ddSs3mQjvGCuE6WoamuChN9VkO0o3C0TuU6DxmYBPpjpTzU1w9KYKscUEZ7WpliY4alN7muA8NPWfJjhgapytsfYmuu4PquGyfU/7vfUAAAAASUVORK5CYII="
              className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
              alt="Feature Icon"
            />
            <div className="flex-auto">Automated messages via Zapier</div>
          </div>
          <div className="flex flex-row sm:flex-row gap-1.5 mt-3">
            <img
              loading="lazy"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAFKq9WqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFlSURBVEhLvZbhccMgDIU9QkfoCB2hGzgbdKRmg4zQEXxpehfH+eEROkJHaAFJBoQCwsb97nQHknh5MZhzx+mH+QmHwOHz9otDmEQJHf3l+opD0AOd6ZSI4zAPrAaZb5hMJ6z5IocKYjFHccGifL4NmIrxDeNPlHATQ9Jg6Yfr81KQGoioUWogXGOuYQ2hveT0aAgFXIQOfcFvMSdabIP/RfFJCmdmidIzkgWDqH3IiWDrXeKYH3k35/UDp/XQ6wtupxnTeiIBDCzpkAT64evFFTUnMStwuNzfKOkSAlkBCy9ieqEoYDHbhLecDyzpBAhJqEqAkIV8FAWIR0JqAYILVQsQJLRaYG+SDTPv3qprdwvSqQmjP49HbN2PkgkX5h7ddSs3mQjvGCuE6WoamuChN9VkO0o3C0TuU6DxmYBPpjpTzU1w9KYKscUEZ7WpliY4alN7muA8NPWfJjhgapytsfYmuu4PquGyfU/7vfUAAAAASUVORK5CYII="
              className="shrink-0 self-start aspect-[1.32] w-[17px] mt-2"
              alt="Feature Icon"
            />
            <div className="flex-auto">24/7 support and consulting</div>
          </div>
        </div>
        <div class="  flex flex-col  justify-center gap-4 md:gap-16 py-5 mt-16 pb-32 md:flex-row">
          <div class=" flex  ">
            <img src={dollaricon} alt="dollar" class=" w-8 h-8" />
            <h5 class=" ml-2 font-bold">30 days money back Guarantree</h5>
          </div>
          <div class=" flex ">
            <img src={codecamp} alt="fire" class=" w-8 h-6" />
            <h5 class=" ml-2  font-bold">No setup fees 100% hassle-free</h5>
          </div>
          <div class=" flex ">
            <img src={shareicon} alt="back" class=" w-8 h-8" />
            <h5 class=" ml-2  font-bold">
              No monthly subscription Pay once and for all
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
