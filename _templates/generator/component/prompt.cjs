module.exports = [
  {
    type: "input",
    name: "feature",
    message: "featureを入力してください",
    validate: (input) => input !== "",
  },
  {
    type: "input",
    name: "component_name",
    message: "コンポーネント名を入力してください。",
    validate: (input) => input !== "",
  },
  {
    type: "confirm",
    name: "require_storybook",
    message: "Storybookファイルを生成しますか？",
  },
];
