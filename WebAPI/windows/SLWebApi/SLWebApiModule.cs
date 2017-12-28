using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace sl.lib.webapi.SLWebApi
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class SLWebApiModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="SLWebApiModule"/>.
        /// </summary>
        internal SLWebApiModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "SLWebApi";
            }
        }
    }
}
