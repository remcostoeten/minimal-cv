import Flex from "../core/Flexer";
import BentoBox from "../shells/BentoShell";
import HeaderShell from "./HeaderShell";

export default function Header() {
    return (
        // <BentoBox >
        //     <Flex>
        //         <div className="flex flex-auto gap-2">
        //             {userImage()}
        //             <div className="flex flex-col pt-2 pb-0.5 my-auto">
        //                 <div className="text-base font-medium leading-7 text-violet-400">
        //                     Remco Stoeten
        //                 </div>
        //                 <div className="mt-3.5 text-sm font-light leading-4 text-neutral-400">
        //                     Front-end engineer
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="flex flex-auto gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
        //             <div className="flex flex-col justify-center my-auto text-sm font-light leading-4 rounded-xl bg-blend-normal bg-zinc-900 text-neutral-200">
        //                 <div className="flex gap-2 px-3 py-3 rounded-xl border border-teal-500 border-solid">
        //                     <div className="shrink-0 my-auto w-1.5 h-1.5 bg-teal-500 rounded" />
        //                     <div className="flex-auto">Available for work</div>
        //                 </div>
        //             </div>
        //             <div className="flex gap-3 bg-blend-normal">
        //                 <img
        //                     loading="lazy"
        //                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e13bd4d231e4b0d0966cb9647c2ce02598b8f4860628d6990999727555beaa5?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
        //                     className="shrink-0 aspect-square fill-zinc-900 w-[42px]"
        //                 />
        //                 <img
        //                     loading="lazy"
        //                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/7628953a98a543b52d20c16d6cfacf14f7cf24c4c80ed792683f132ee017bb2e?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
        //                     className="shrink-0 shadow-lg aspect-square w-[42px]"
        //                 />
        //                 <img
        //                     loading="lazy"
        //                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/83cef33678be2b21879563e1b2cf32435613e844a19e82973fccdbb563146109?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
        //                     className="shrink-0 shadow-lg aspect-square w-[42px]"
        //                 />
        //                 <img
        //                     loading="lazy"
        //                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/020636433350988b64e2368950ea7dc75aeae08383d6db2a3a8f65886c4422ee?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
        //                     className="shrink-0 shadow-lg aspect-square w-[42px]"
        //                 />
        //             </div>
        //         </div></Flex>
        // </x>
        <HeaderShell>
            <div className="flex flex-auto gap-2">
                {userImage()}
                <Flex dir="col" justify="center" gap="small">
                    <div className="font leading-[1] text-[24px] font-medium  text-pink">
                        Remco Stoeten
                    </div>
                    <div className=" text-[14px] font-light  text-neutral-400">
                        Front-end engineer
                    </div>
                </Flex>
            </div>
        </HeaderShell >);
}


function userImage() {
    return (
        <img
            className="rounded-lg px-4 py-8"
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
            className="shrink-0 aspect-square w-[68px]"
        />
    )
}