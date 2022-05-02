/**
 * @author       Fielding Johnston <fielding@justfielding.com> 
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

const IsPlainObject = Phaser.Utils.Objects.IsPlainObject;


export default class TemplatePlugin extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager: Phaser.Plugins.PluginManager) {
    super(pluginManager);

    pluginManager.registerFileType('foo', loaderCallback);

    console.warn('This template is not intended to be used as an actual plugin!. ');
  }
}

const loaderCallback = function (this: Phaser.Loader.LoaderPlugin) {
  
  // do fun stuff

  return this;
};
