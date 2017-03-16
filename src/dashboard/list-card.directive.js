export default function () {
    return {
        template: `<div class="card-block" >
                <div class="card">
                <div class="card-block">
                <h5 class="card-title">{{ result.title || result.name }}</h5>
              <a ui-sref="details({data: result, type: type})" 
              class="btn btn-primary pull-right see-details">See details</a>
              </div>
              </div>
              </div>`,
        restrict: 'E',
        scope: {
            result: '=',
            type: '='
        }
    };
}
