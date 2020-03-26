module.exports = function() {
  return function({ addVariant, theme, e }) {
    const darkSelector = theme("darkSelector", ".mode-dark");
    const darkIdentifier = theme("darkIdentifier", "darkmode");
    addVariant(darkIdentifier, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `${darkSelector} .${e(
          `${darkIdentifier}${separator}${className}`
        )}`;
      });
    });

    addVariant(`{darkIdentifier}hover`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `${darkSelector} .${e(
          `${darkIdentifier}-hover${separator}${className}`
        )}:hover`;
      });
    });

    addVariant(`{darkIdentifier}focus`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `${darkSelector} .${e(
          `${darkIdentifier}-focus${separator}${className}`
        )}:focus`;
      });
    });

    addVariant(`{darkIdentifier}active`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `${darkSelector} .${e(
          `${darkIdentifier}-active${separator}${className}`
        )}:active`;
      });
    });

    addVariant(
      `{darkIdentifier}group-hover`,
      ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${darkSelector} .group:hover .${e(
            `${darkIdentifier}-group-hover${separator}${className}`
          )}`;
        });
      }
    );

    addVariant(
      `{darkIdentifier}focus-within`,
      ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${darkSelector} .${e(
            `${darkIdentifier}-focus-within${separator}${className}`
          )}:focus-within`;
        });
      }
    );

    addVariant(`{darkIdentifier}even`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `${darkSelector} .${e(
          `${darkIdentifier}-even${separator}${className}`
        )}:nth-child(even)`;
      });
    });

    addVariant(`{darkIdentifier}odd`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `${darkSelector} .${e(
          `${darkIdentifier}-odd${separator}${className}`
        )}:nth-child(odd)`;
      });
    });
  };
};
