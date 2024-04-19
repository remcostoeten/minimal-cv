import * as React from "react";

export default function TopMenu() {
  return (
    <div className="flex flex-col items-center px-16 pt-6 pb-20 bg-zinc-950 max-md:px-5">
      <div className="flex gap-5 justify-between items-start py-5 pr-5 pl-20 max-w-full shadow-sm bg-stone-950 rounded-[30px] w-[800px] max-md:flex-wrap max-md:pl-5">
        <div className="flex flex-col leading-[120%]">
          <div className="text-2xl text-violet-400">Leon Dobric</div>
          <div className="mt-3 text-sm text-neutral-400">Product Designer</div>
        </div>
        <div className="justify-center items-start self-stretch px-7 py-3 my-auto text-sm leading-4 rounded-xl bg-zinc-900 text-neutral-200 max-md:pl-5">
          Available for work
        </div>
        <div className="flex gap-3">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/064f033063ab115e12794e75ea6e7b75a3944af166814e9acebe1bd4160388a2?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/064f033063ab115e12794e75ea6e7b75a3944af166814e9acebe1bd4160388a2?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/064f033063ab115e12794e75ea6e7b75a3944af166814e9acebe1bd4160388a2?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/064f033063ab115e12794e75ea6e7b75a3944af166814e9acebe1bd4160388a2?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/064f033063ab115e12794e75ea6e7b75a3944af166814e9acebe1bd4160388a2?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/064f033063ab115e12794e75ea6e7b75a3944af166814e9acebe1bd4160388a2?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/064f033063ab115e12794e75ea6e7b75a3944af166814e9acebe1bd4160388a2?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/064f033063ab115e12794e75ea6e7b75a3944af166814e9acebe1bd4160388a2?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
            className="shrink-0 rounded-2xl shadow-sm aspect-square w-[42px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cce80444ef0397915e5d0acd2da85d5e47f35d5755c3aaaf39e03aad69a9c42c?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce80444ef0397915e5d0acd2da85d5e47f35d5755c3aaaf39e03aad69a9c42c?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce80444ef0397915e5d0acd2da85d5e47f35d5755c3aaaf39e03aad69a9c42c?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce80444ef0397915e5d0acd2da85d5e47f35d5755c3aaaf39e03aad69a9c42c?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce80444ef0397915e5d0acd2da85d5e47f35d5755c3aaaf39e03aad69a9c42c?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce80444ef0397915e5d0acd2da85d5e47f35d5755c3aaaf39e03aad69a9c42c?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce80444ef0397915e5d0acd2da85d5e47f35d5755c3aaaf39e03aad69a9c42c?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce80444ef0397915e5d0acd2da85d5e47f35d5755c3aaaf39e03aad69a9c42c?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
            className="shrink-0 rounded-2xl shadow-sm aspect-square w-[42px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c2ca76b305fa4ea310dbcae71bbb13ccd26d9b335999d095fdb587227fbe0c0b?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2ca76b305fa4ea310dbcae71bbb13ccd26d9b335999d095fdb587227fbe0c0b?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2ca76b305fa4ea310dbcae71bbb13ccd26d9b335999d095fdb587227fbe0c0b?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2ca76b305fa4ea310dbcae71bbb13ccd26d9b335999d095fdb587227fbe0c0b?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2ca76b305fa4ea310dbcae71bbb13ccd26d9b335999d095fdb587227fbe0c0b?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2ca76b305fa4ea310dbcae71bbb13ccd26d9b335999d095fdb587227fbe0c0b?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2ca76b305fa4ea310dbcae71bbb13ccd26d9b335999d095fdb587227fbe0c0b?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2ca76b305fa4ea310dbcae71bbb13ccd26d9b335999d095fdb587227fbe0c0b?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
            className="shrink-0 rounded-2xl shadow-sm aspect-square w-[42px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af6bcda4f13ef1822f6f428edeae2a70fbbc5d06d420cdaad4255330c3ef8c77?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af6bcda4f13ef1822f6f428edeae2a70fbbc5d06d420cdaad4255330c3ef8c77?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af6bcda4f13ef1822f6f428edeae2a70fbbc5d06d420cdaad4255330c3ef8c77?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af6bcda4f13ef1822f6f428edeae2a70fbbc5d06d420cdaad4255330c3ef8c77?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af6bcda4f13ef1822f6f428edeae2a70fbbc5d06d420cdaad4255330c3ef8c77?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af6bcda4f13ef1822f6f428edeae2a70fbbc5d06d420cdaad4255330c3ef8c77?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af6bcda4f13ef1822f6f428edeae2a70fbbc5d06d420cdaad4255330c3ef8c77?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af6bcda4f13ef1822f6f428edeae2a70fbbc5d06d420cdaad4255330c3ef8c77?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
            className="shrink-0 rounded-2xl shadow-sm aspect-square w-[42px]"
          />
        </div>
      </div>
    </div>
  );
}
