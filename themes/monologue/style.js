/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // --- 核心修改：设置夜间模式的背景 ---
      .dark body {
        background-image: url(https://raw.githubusercontent.com/monologuerain/blig-img/main/blig-img/picture64e3fc4b6fd041d4dead83b2646249f.jpg);
        background-position: center;    // 图片居中
        background-size: cover;         // 图片覆盖整个屏幕
        background-repeat: no-repeat;   // 图片不重复
        background-attachment: fixed;   // 固定背景，内容滚动时有视差效果
        background-color: #1a1c28;       // 图片加载出来前的深蓝色底色
      }

      // --- 核心修改：调整菜单下划线动画颜色 ---
      #theme-next .menu-link {
        text-decoration: none;
        /* 将下划线颜色从蓝色改为星光白 */
        background-image: linear-gradient(#E5E7EB, #E5E7EB);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
      }
      #theme-next .menu-link:hover {
        background-size: 100% 2px;
        /* 悬浮时文字颜色也变为更亮的白色 */
        color: #FFFFFF;
      }
      
      // --- 附加效果：为文章和卡片添加毛玻璃效果 ---
      /* 这会影响文章详情页和可能的侧边栏卡片 */
      #theme-next .card,
      #theme-next article {
          background-color: rgba(25, 28, 40, 0.7) !important;
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
      }

      // --- 附加效果：让夜间模式下的文字更柔和 ---
      .dark {
        color: #E5E7EB; // 将默认文字颜色从纯白改为柔和的灰白色
      }

    `}</style>
  )
}

export { Style }
